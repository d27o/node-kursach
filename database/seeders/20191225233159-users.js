"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          password: "$2a$08$LXRanPgF3D9vsXogcC.6QetC5ADD8mcxQ2y.mtmMxgUz9ySH0Tm16",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date()
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
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
