'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products_customers',
    [
      {
        productId: 1,
        customerId: 2,
        purchaseDate: new Date(),
      },
      {
        productId: 1,
        customerId: 3,
        purchaseDate: new Date(),
      },
      {
        productId: 2,
        customerId: 2,
        purchaseDate: new Date(),
      },
      {
        productId: 2,
        customerId: 3,
        purchaseDate: new Date(),
      },
      {
        productId: 3,
        customerId: 1,
        purchaseDate: new Date(),
      },
      {
        productId: 3,
        customerId: 3,
        purchaseDate: new Date(),
      }
    ],
    {
      underscored: true,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products_customers', null, {});
  }
};
