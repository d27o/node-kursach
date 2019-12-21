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
        criminalCaseId: 1,
        materialEvidenceId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        criminalCaseId: 1,
        materialEvidenceId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        criminalCaseId: 1,
        materialEvidenceId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        criminalCaseId: 2,
        materialEvidenceId: 4
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        criminalCaseId: 2,
        materialEvidenceId: 5
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
