'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Witnesses',
      [
        {
          name: "Иван",
          surname: "Огурцев",
          patronymic: "Андреевич",
          serialNumber: "4504 365418",
          addressId: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Олег",
          surname: "Петров",
          patronymic: "Олегович",
          serialNumber: "4534 353418",
          addressId: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Андрей",
          surname: "Петухов",
          patronymic: "Олегович",
          serialNumber: "4544 534418",
          addressId: "3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Роберт",
          surname: "Ламов",
          patronymic: "Альбертович",
          serialNumber: "4504 365418",
          addressId: "4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Владислав",
          surname: "Лягушкин",
          patronymic: "Сергеевич",
          serialNumber: "5423 456345",
          addressId: "5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Владлен",
          surname: "Морозов",
          patronymic: "Макарович",
          serialNumber: "3453 654384",
          addressId: "6",
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    
      return queryInterface.bulkDelete('Witnesses', null, {});
    
  }
};
