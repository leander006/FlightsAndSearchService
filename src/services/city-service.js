const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const result = await this.CityRepository.createCity(data);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async AddAllCity(data) {
    console.log(data);
    try {
      const result = await this.CityRepository.AddAllCities(data);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const result = await this.CityRepository.deleteCity(cityId);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const result = await this.CityRepository.updateCity(cityId, data);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const result = await this.CityRepository.getCity(cityId);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async getAirports(cityId) {
    try {
      const result = await this.CityRepository.getAirport(cityId);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async getCities(filter) {
    try {
      const result = await this.CityRepository.getCities({ name: filter.name });
      return result;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityService;
