'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkInsert('CriminalCaseMaterialEvidences', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        CriminalCaseId: 1,
        MaterialEvidenceId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        CriminalCaseId: 1,
        MaterialEvidenceId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        CriminalCaseId: 1,
        MaterialEvidenceId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        CriminalCaseId: 2,
        MaterialEvidenceId: 4
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        CriminalCaseId: 2,
        MaterialEvidenceId: 5
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('CriminalCaseMaterialEvidences', null, {});

  }
};
