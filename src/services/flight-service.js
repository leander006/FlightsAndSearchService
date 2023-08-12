const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.FlightRepository = new FlightRepository();
    this.AirplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less then departure time" };
      }
      const airplane = await this.AirplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.FlightRepository.createFlights({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      throw { error };
    }
  }

  async updateFlight(data, flightId) {
    try {
      const flight = await this.FlightRepository.updateFlight(data, flightId);
      return flight;
    } catch (error) {
      throw { error };
    }
  }

  async getFlights(id) {
    try {
      const flight = await this.FlightRepository.getFlights(id);
      return flight;
    } catch (error) {
      throw { error };
    }
  }

  async getAll(filter) {
    try {
      const flight = await this.FlightRepository.getAllFlights(filter);
      return flight;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = FlightService;
