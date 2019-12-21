'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Expertises', [
      {
        date: new Date(2019, 10, 4, 20, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
        conclusion: 'На ноже были обнаружены отпечатки подсудимого',
        responsiblePersonId: 1,
        criminalCaseId: 1,
        materialEvidenceId: 1,
      },
      {
        date: new Date(2019, 10, 4, 20, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
        conclusion: 'Автомат принадлежит подсудимому',
        responsiblePersonId: 1,
        criminalCaseId: 1,
        materialEvidenceId: 2,
      },
      {
        date: new Date(2019, 10, 4, 20, 0),
        createdAt: new Date(),
        updatedAt: new Date(),
        conclusion: 'На видеозаписи подсудимый',
        responsiblePersonId: 1,
        criminalCaseId: 1,
        materialEvidenceId: 3,
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('Expertises', null, {});
  }
};
