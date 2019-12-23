"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "ResponsiblePeople",
      [
        {
          name: "Никита",
          patronymicName: "Сергеевич",
          lastName: "Иванов",
          createdAt: new Date(),
          updatedAt: new Date(),
          PositionId: 1,
          AddressId: 5,
          ExtraOptionId: 2,
          password: '$2a$08$LXRanPgF3D9vsXogcC.6QetC5ADD8mcxQ2y.mtmMxgUz9ySH0Tm16',
          username: 'admin'
        },
        {
          name: "Дмитрий",
          patronymicName: "Алексеевич",
          lastName: "Калугин",
          createdAt: new Date(),
          updatedAt: new Date(),
          PositionId: 2,
          AddressId: 3
        },
        {
          name: "Андрей",
          patronymicName: "Сергеевич",
          lastName: "Антипов",
          createdAt: new Date(),
          updatedAt: new Date(),
          PositionId: 2,
          AddressId: 2
        },
        {
          name: "Максим",
          patronymicName: "Борисович",
          lastName: "Эйнтшейн",
          createdAt: new Date(),
          updatedAt: new Date(),
          PositionId: 3,
          AddressId: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('ResponsiblePeople', null, {});
    
  }
};
