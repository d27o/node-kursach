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
          ResponsiblePersonId: 2,
          RegistrationId: 1,
          DocumentId: 1
        },
        {
          dateOfExtradition: new Date(2019, 11, 12, 21, 20),
          integrityMark: 'С малым изъяном',
          note: 'Выдан без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          ResponsiblePersonId: 2,
          RegistrationId: 2,
          DocumentId: 2
        },
        {
          dateOfExtradition: new Date(2019, 11, 10, 22, 20),
          integrityMark: 'В целостности',
          note: 'Выдан без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          ResponsiblePersonId: 1,
          RegistrationId: 3,
          DocumentId: 3
        },
        {
          dateOfExtradition: new Date(2019, 11, 11, 18, 20),
          integrityMark: 'В целостности',
          note: 'Выдан без притензий',
          createdAt: new Date(),
          updatedAt: new Date(),
          ResponsiblePersonId: 3,
          RegistrationId: 4,
          DocumentId: 4
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
