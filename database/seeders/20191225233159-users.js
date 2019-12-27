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
          password: "$2a$08$GiJcJXCHmuDFPOFd7ziN1uxQo7/Q/cs3mI4iuvq0AZGN3hY5rmOT.",
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
