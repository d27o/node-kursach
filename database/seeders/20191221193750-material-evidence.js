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
          description: 'Окровавленный нож',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 1,
          ProtocolId: 1
        },
        {
          name: 'Автомат АК-47',
          state: 'Поношенный',
          description: 'Автомат охолощенный',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 2,
          ProtocolId: 1
        },
        {
          name: 'Видеозапись происшествия',
          state: 'Новый',
          description: 'Видеозапись с камер видеонаблюдения магазина Магнит',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 4,
          ProtocolId: 1
        },
        {
          name: 'Документ купли-продажи',
          description: 'Поддельный документ купли-продажи',
          state: 'Новый',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 5,
          ProtocolId: 2
        },
        {
          name: 'Стиральная машинка',
          description: 'Стиральная машинка фирмы BORSH, взятая в рассрочку',
          state: 'Старая',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 6,
          ProtocolId: 3
        },
        {
          name: 'Пылесос',
          state: 'Советский неработающий пылесос пылесос',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 6,
          ProtocolId: 3
        },
        {
          name: 'Нож бабочка',
          state: 'Поношенный',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 1,
          ProtocolId: 4
        },
        {
          name: 'Катана',
          state: 'Поношенный',
          description: 'Редкое китайское коллекционное оружие династии СУНЬ',
          createdAt: new Date(),
          updatedAt: new Date(),
          TypeOfMaterialEvidenceId: 1,
          ProtocolId: 5
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
