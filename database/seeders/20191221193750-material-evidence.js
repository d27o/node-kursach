'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('MaterialEvidences', [
        {
          name: 'Нож BALISTIKA',
          state: 'Новый',
          createdAt: new Date(),
          updatedAt: new Date(),
          typeOfMaterialEvidenceId: 1,
          protocolId: 1
        },
        {
          name: 'Автомат АК-47',
          state: 'Поношенный',
          createdAt: new Date(),
          updatedAt: new Date(),
          typeOfMaterialEvidenceId: 2,
          protocolId: 1
        },
        {
          name: 'Видеозапись происшествия',
          state: 'Новый',
          createdAt: new Date(),
          updatedAt: new Date(),
          typeOfMaterialEvidenceId: 4,
          protocolId: 1
        },
        {
          name: 'Документ купли-продажи',
          state: 'Новый',
          createdAt: new Date(),
          updatedAt: new Date(),
          typeOfMaterialEvidenceId: 5,
          protocolId: 2
        },
        {
          name: 'Стиральная машинка',
          state: 'Старая',
          createdAt: new Date(),
          updatedAt: new Date(),
          typeOfMaterialEvidenceId: 6,
          protocolId: 3
        },
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('MaterialEvidences', null, {});
  }
};
