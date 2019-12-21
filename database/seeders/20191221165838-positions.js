"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Positions",
      [
        {
          name: "Специалист",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Следователь",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Прокурор",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Positions', null, {});
    
  }
};
