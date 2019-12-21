"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "TypeOfMaterialEvidences",
      [
        {
          name: "Холодное оружие",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Огнестрельное оружие",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Аудиозапись",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Видеозапись",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Документы",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Техника",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Фотография",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Химическое вещество",
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
      return queryInterface.bulkDelete('TypeOfMaterialEvidences', null, {});
    
  }
};
