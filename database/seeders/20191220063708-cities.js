'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('Cities',
      [
        {
          name: "Москва",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Санкт Петербург",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Краснодар",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Казань",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Сочи",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Волгоград",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ярославль",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Череповец",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Оринбург",
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Cities', null, {});
    
  }
};
