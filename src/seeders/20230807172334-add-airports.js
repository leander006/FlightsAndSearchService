"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        cityId: "1",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        name: "Kempegowda International Airport Bengaluru",
        cityId: "4",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        name: "DB patil international airport",
        cityId: "1",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        name: "Hindustan Aeronautics Limited Airport",
        cityId: "4",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        name: "Manohar International Airport",
        cityId: "8",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        name: "Mysuru Airport",
        cityId: "12",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        name: "Sri Guru Ram Dass Jee International Airport",
        cityId: "11",
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
