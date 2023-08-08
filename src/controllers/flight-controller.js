const { FlightService } = require("../services/index");
const { successCodes } = require("../utils/error-codes");
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(successCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
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
    return res.status(successCodes.OK).json({
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
    return res.status(successCodes.OK).json({
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
