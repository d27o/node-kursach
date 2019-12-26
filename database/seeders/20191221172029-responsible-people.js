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
          ExtraOptionId: 2
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
