'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkInsert('ProtocolWitnesses', [
        {
          WitnessId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          ProtocolId: 1
        },
        {
          WitnessId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          ProtocolId: 1,
        },
        {
          WitnessId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          ProtocolId: 1
        },
        {
          WitnessId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          ProtocolId: 2
        },
        {
          WitnessId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          ProtocolId: 2
        },
        {
          WitnessId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          ProtocolId: 2
        },
        {
          WitnessId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
          ProtocolId: 3
        },
        {
          WitnessId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
          ProtocolId: 3
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
