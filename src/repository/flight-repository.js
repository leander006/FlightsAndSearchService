const { Flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {
  #createFilter(data) {
    let filter = {};
    let priceFilter = [];
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });
    return filter;
  }

  async createFlights(data) {
    try {
      const flights = await Flights.create(data);
      return flights;
    } catch (error) {
      throw { error };
    }
  }

  async getFlights(id) {
    try {
      const flights = await Flights.findByPk(id);
      return flights;
    } catch (error) {
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      console.log(filterObject);
      const flights = await Flights.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = FlightRepository;
