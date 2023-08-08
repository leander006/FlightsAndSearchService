"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "Enola Gay",
        capacity: 230,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        modelNumber: "Memphis Belle",
        capacity: 170,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        modelNumber: "Spirit of St. Louis",
        capacity: 260,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        modelNumber: "Old 666",
        capacity: 240,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        modelNumber: "City of Canberra",
        capacity: 300,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        modelNumber: "The Galloping Ghost",
        capacity: 190,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        modelNumber: "Cape Cod",
        capacity: 210,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
