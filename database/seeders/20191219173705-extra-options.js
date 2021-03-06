"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "ExtraOptions",
      [
        {
          experience: "4 года",
          createdAt: new Date(),
          updatedAt: new Date(),
          SpecializationId: 1
        },
        {
          experience: "5 лет",
          createdAt: new Date(),
          updatedAt: new Date(),
          SpecializationId: 2
        },
        {
          experience: "6 лет",
          createdAt: new Date(),
          updatedAt: new Date(),
          SpecializationId: 3
        },
        {
          experience: "7 лет",
          createdAt: new Date(),
          updatedAt: new Date(),
          SpecializationId: 4
        },
        {
          experience: "8 лет",
          createdAt: new Date(),
          updatedAt: new Date(),
          SpecializationId: 5
        },
        {
          experience: "9 лет",
          createdAt: new Date(),
          updatedAt: new Date(),
          SpecializationId: 6
        },
        {
          experience: "10 лет",
          createdAt: new Date(),
          updatedAt: new Date(),
          SpecializationId: 7
        },
        {
          experience: "11 лет",
          createdAt: new Date(),
          updatedAt: new Date(),
          SpecializationId: 8
        },
        {
          experience: "12 лет",
          createdAt: new Date(),
          updatedAt: new Date(),
          SpecializationId: 9
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('ExtraOptions', null, {});
    
  }
};
