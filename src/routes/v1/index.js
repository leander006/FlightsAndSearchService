const experss = require("express");

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AiroprtController = require("../../controllers/airport-controller");
const router = experss.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
router.post("/cities", CityController.addAll);
router.get("/airports/:id", CityController.getAllAirports);

router.post("/flights", FlightController.create);
router.get("/flights/:id", FlightController.getFlight);
router.get("/flights", FlightController.getAll);

router.post("/airports", AiroprtController.create);
module.exports = router;
