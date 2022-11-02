'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        id: 1,
        name: 'iPhone X',
        quantity: 10,
        price: 2199.99,
        updated: new Date(),
        category_id: 1,
      },
      {
        id: 2,
        name: 'Soup',
        quantity: 30,
        price: 10.79,
        updated: new Date(),
        category_id: 2,
      },
      {
        id: 3,
        name: 'Gallardo',
        quantity: 2,
        price: 1340000.00,
        updated: new Date(),
        category_id: 3,
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
