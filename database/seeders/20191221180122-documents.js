"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Documents",
      [
        {
          name: "Приема-передачи",
          createdAt: new Date(),
          updatedAt: new Date(),
          typeOfDocumentId: 3,
          responsiblePersonId: 4
        },
        {
          name: "О выдаче",
          createdAt: new Date(),
          updatedAt: new Date(),
          typeOfDocumentId: 1,
          responsiblePersonId: 4
        },
        {
          name: "Направление на экспертизу",
          createdAt: new Date(),
          updatedAt: new Date(),
          typeOfDocumentId: 2,
          responsiblePersonId: 4
        },
        {
          name: "На обслуживании",
          createdAt: new Date(),
          updatedAt: new Date(),
          typeOfDocumentId: 2,
          responsiblePersonId: 4
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
      return queryInterface.bulkDelete('Documents', null, {});
    
  }
};
