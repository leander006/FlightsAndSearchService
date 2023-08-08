class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async destory(modelId) {
    try {
      const result = await this.repository.destory(modelId);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const result = await this.repository(modelId, data);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async get(modelId) {
    try {
      const result = await this.repository.get(modelId);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async getAll() {
    try {
      const result = await this.repository.getAll();
      return result;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CrudService;
