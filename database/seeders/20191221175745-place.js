'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkInsert('Places', [
      {
        name: 'Скамейка',
        insepctionDate: new Date(2019, 11, 9, 23, 20),
        description: 'Скамейка в парке 50-летия Октября',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Магазин',
        insepctionDate: new Date(2019, 10, 4, 20, 0),
        description: 'Супермаркет Ашан',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Набережная',
        insepctionDate: new Date(2019, 11, 22, 22, 0),
        description: 'Набережная напротив мэрии',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сквер',
        insepctionDate: new Date(2019, 6, 4, 11, 0),
        description: 'Сквер имени Ленина',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фудкорт',
        insepctionDate: new Date(2019, 10, 9, 18, 0),
        description: 'Фудкорт ТЦ Звездочка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Детский дом',
        insepctionDate: new Date(2019, 5, 6, 12, 0),
        description: 'Детский дом имени Ленина',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Собачий приют',
        insepctionDate: new Date(2019, 6, 4, 11, 0),
        description: 'Собачий приют рядом с лосиным заповедником',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Притон',
        insepctionDate: new Date(2019, 8, 6, 8, 0),
        description: 'Притон расположенный в дворце пионеров',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('Places', null, {});
  }
};
