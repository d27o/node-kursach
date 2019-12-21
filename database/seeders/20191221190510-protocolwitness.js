'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkInsert('ProtocolWitnesses', [
        {
          witnessId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          protocolId: 1
        },
        {
          witnessId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          protocolId: 1,
        },
        {
          witnessId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          protocolId: 1
        },
        {
          witnessId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          protocolId: 2
        },
        {
          witnessId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          protocolId: 2
        },
        {
          witnessId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          protocolId: 2
        },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('ProtocolWitnesses', null, {});
  }
};
