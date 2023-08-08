const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

const addAll = async (req, res) => {
  try {
    console.log(req.body);
    const city = await cityService.AddAllCity(req.body);

    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully added mutiple cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to add multiple cities",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const city = await cityService.deleteCity(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a city",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const city = await cityService.getCities(req.query);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully fetched all city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch all city",
      err: error,
    });
  }
};

const getAllAirports = async (req, res) => {
  try {
    const city = await cityService.getAirports(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully fetched all airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch all airporta",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a city",
      err: error,
    });
  }
};

module.exports = {
  create,
  update,
  get,
  destroy,
  getAll,
  addAll,
  getAllAirports,
};
