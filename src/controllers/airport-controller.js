const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created a Airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight ",
      err: error,
    });
  }
};

const getFlight = async (req, res) => {
  try {
    const flight = await flightService.getFlights(req.params.id);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully fetched a flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a flight ",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flight = await flightService.getAll(req.query);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully fetched all flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch all flight ",
      err: error,
    });
  }
};

module.exports = {
  create,
  getFlight,
  getAll,
};
