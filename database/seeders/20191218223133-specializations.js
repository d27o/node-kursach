"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Specializations",
      [
        {
          name: "Исследование холодного оружия",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Исследование почерка и подписей",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Исследование письменной речи",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Исследование следов человека",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Исследование огнестрельного оружия и патронов к нему",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Исследование голоса и звучащей речи",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Исследование спиртосодержащих жидкостей",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Исследование боеприпасов, взрывных устройств и следов их взрыва",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Исследование следов и обстоятельств выстрела",
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
      return queryInterface.bulkDelete('Specializations', null, {});
    
  }
};
