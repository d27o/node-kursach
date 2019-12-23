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
          TypeOfMaterialEvidenceId: 1,
          ProtocolId: 1
        },
        {
          name: 'Автомат АК-47',
          state: 'Поношенный',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 2,
          ProtocolId: 1
        },
        {
          name: 'Видеозапись происшествия',
          state: 'Новый',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 4,
          ProtocolId: 1
        },
        {
          name: 'Документ купли-продажи',
          state: 'Новый',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 5,
          ProtocolId: 2
        },
        {
          name: 'Стиральная машинка',
          state: 'Старая',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 6,
          ProtocolId: 3
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
