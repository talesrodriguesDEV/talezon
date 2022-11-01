'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        id: 1,
        name: 'iPhone X',
        description: 'aoba',
        quantity: 10,
        price: 2199.99,
        updated: new Date(),
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Sopa',
        description: 'KEKW',
        quantity: 30,
        price: 10.79,
        updated: new Date(),
        categoryId: 2,
      },
      {
        id: 3,
        name: 'Gallardo',
        description: 'eita',
        quantity: 2,
        price: 2199000.99,
        updated: new Date(),
        categoryId: 3,
      },
    ],
    {
      underscored: true,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
