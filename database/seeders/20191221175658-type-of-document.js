"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "TypeOfDocuments",
      [
        {
          name: "Приказ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Протокол",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Акт",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Докладная",
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
      return queryInterface.bulkDelete('TypeOfDocuments', null, {});
    
  }
};
