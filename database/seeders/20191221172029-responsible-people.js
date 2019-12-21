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
          positionId: 1,
          addressId: 5,
          extraOptionsId: 2
        },
        {
          name: "Дмитрий",
          patronymicName: "Алексеевич",
          lastName: "Калугин",
          createdAt: new Date(),
          updatedAt: new Date(),
          positionId: 2,
          addressId: 3
        },
        {
          name: "Андрей",
          patronymicName: "Сергеевич",
          lastName: "Антипов",
          createdAt: new Date(),
          updatedAt: new Date(),
          positionId: 2,
          addressId: 2
        },
        {
          name: "Максим",
          patronymicName: "Борисович",
          lastName: "Эйнтшейн",
          createdAt: new Date(),
          updatedAt: new Date(),
          positionId: 3,
          addressId: 1
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
