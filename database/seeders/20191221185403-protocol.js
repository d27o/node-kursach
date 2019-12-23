'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Protocols', [
        {
          name: 'Протокол осмотра места происшествия',
          createdAt: new Date(),
          updatedAt: new Date(),
          PlaceId: 1
        },
        {
          name: 'Протокол осмотра места происшествия',
          createdAt: new Date(),
          updatedAt: new Date(),
          PlaceId: 2
        },
        {
          name: 'Протокол осмотра места происшествия',
          createdAt: new Date(),
          updatedAt: new Date(),
          PlaceId: 3
        },
        {
          name: 'Протокол осмотра места происшествия',
          createdAt: new Date(),
          updatedAt: new Date(),
          PlaceId: 4
        },
        {
          name: 'Протокол осмотра места происшествия',
          createdAt: new Date(),
          updatedAt: new Date(),
          PlaceId: 5
        },
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Protocols', null, {});
  }
};
