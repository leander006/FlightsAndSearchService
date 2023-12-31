class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async destory(modelId) {
    try {
      await this.model.destory({
        where: {
          id: modelId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CrudRepository;
