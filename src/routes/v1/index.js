const experss = require("express");

const CityController = require("../../controllers/city-controller");

const router = experss.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
router.post("/cities", CityController.addAll);
router.get("/airports/:id", CityController.getAllAirports);

module.exports = router;
