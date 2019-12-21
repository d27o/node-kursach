'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Registrations', [
        {
          acceptDate: new Date(2019, 11, 9, 23, 20),
          integrityMark: 'В целостности',
          note: 'Принят без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          responsiblePersonId: 2,
          materialEvidenceId: 1
        },
        {
          acceptDate: new Date(2019, 11, 12, 21, 20),
          integrityMark: 'С малым изъяном',
          note: 'Принят без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          responsiblePersonId: 2,
          materialEvidenceId: 2
        },
        {
          acceptDate: new Date(2019, 11, 10, 22, 20),
          integrityMark: 'В целостности',
          note: 'Принят без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          responsiblePersonId: 3,
          materialEvidenceId: 3
        },
        {
          acceptDate: new Date(2019, 11, 11, 18, 20),
          integrityMark: 'В целостности',
          note: 'Принят без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          responsiblePersonId: 3,
          materialEvidenceId: 4
        },
        {
          acceptDate: new Date(2019, 7, 9, 22, 20),
          integrityMark: 'С изъяном',
          note: 'Принят с притензиями',
          createdAt: new Date(),
          updatedAt: new Date(),
          responsiblePersonId: 2,
          materialEvidenceId: 5
        }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Registrations', null, {});
  }
};
