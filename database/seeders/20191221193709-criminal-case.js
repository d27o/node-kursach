'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkInsert('CriminalCases', [
        {
          numberOfCriminalCase: '0001',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numberOfCriminalCase: '0002',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numberOfCriminalCase: '0003',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numberOfCriminalCase: '0004',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numberOfCriminalCase: '0005',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numberOfCriminalCase: '0006',
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
      return queryInterface.bulkDelete('CriminalCases', null, {});
  }
};
