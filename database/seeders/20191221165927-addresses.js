'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
   return queryInterface.bulkInsert('Addresses',
   [
     {
       street: "Пушкина",
       home: "3",
       flat: "145",
       createdAt: new Date(),
       updatedAt: new Date(),
       cityId: 1
     },
     {
      street: "Галкина",
      home: "2",
      flat: "45",
      createdAt: new Date(),
      updatedAt: new Date(),
      cityId: 2
    },
    {
      street: "Волкова",
      home: "1",
      flat: "23",
      createdAt: new Date(),
      updatedAt: new Date(),
      cityId: 3
    },
    {
      street: "Вавилова",
      home: "6",
      flat: "106",
      createdAt: new Date(),
      updatedAt: new Date(),
      cityId: 4
    },
    {
      street: "Громова",
      home: "45",
      flat: "99",
      createdAt: new Date(),
      updatedAt: new Date(),
      cityId: 5
    },
    {
      street: "Курильская",
      home: "7",
      flat: "34",
      createdAt: new Date(),
      updatedAt: new Date(),
      cityId: 6
    },
    {
      street: "Ленина",
      home: "35",
      flat: "185",
      createdAt: new Date(),
      updatedAt: new Date(),
      cityId: 7
    },
    {
      street: "Победы",
      home: "8",
      flat: "18",
      createdAt: new Date(),
      updatedAt: new Date(),
      cityId: 8
    },
    {
      street: "Проспект Мира",
      home: "7",
      flat: "134",
      createdAt: new Date(),
      updatedAt: new Date(),
      cityId: 9
    },
 ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('Addresses', null, {}); 
  }
};
