const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js");

const db = require("./models/index");

const { City, Airport } = require("./models/index");
const ApiRoutes = require("./routes/index");
// const airport = require("./models/airport");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    // if (process.env.DB_SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }

    // const city = await City.findOne({ id: 5 });

    // const airports = await city.getAirports();
    // console.log(airports);
  });
};

setupAndStartServer();
