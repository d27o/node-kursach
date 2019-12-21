'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Extraditions', [
        {
          dateOfExtradition: new Date(2019, 11, 9, 23, 20),
          integrityMark: 'В целостности',
          note: 'Выдан без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          responsiblePersonId: 2,
          registrationId: 1,
          documentId: 1
        },
        {
          dateOfExtradition: new Date(2019, 11, 12, 21, 20),
          integrityMark: 'С малым изъяном',
          note: 'Выдан без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          responsiblePersonId: 2,
          registrationId: 2,
          documentId: 2
        },
        {
          dateOfExtradition: new Date(2019, 11, 10, 22, 20),
          integrityMark: 'В целостности',
          note: 'Выдан без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          responsiblePersonId: 1,
          registrationId: 3,
          documentId: 3
        },
        {
          dateOfExtradition: new Date(2019, 11, 11, 18, 20),
          integrityMark: 'В целостности',
          note: 'Выдан без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          responsiblePersonId: 3,
          registrationId: 4,
          documentId: 4
        }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Extraditions', null, {});
  }
};
