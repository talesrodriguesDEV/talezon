'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('categories',
    [
      {
        id: '1',
        name: 'Clothes',
      },
      {
        id: '2',
        name: 'Food',
      },
      {
        id: '3',
        name: 'Vehicles',
      },
      {
        id: '4',
        name: 'Electronics',
      },
      {
        id: '5',
        name: 'Musical Instruments',
      },
      {
        id: '6',
        name: 'Sporting Goods',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
