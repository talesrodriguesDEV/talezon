'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products_customers',
    [
      {
        product_id: 1,
        customer_id: 2,
        purchase_date: new Date(),
      },
      {
        product_id: 1,
        customer_id: 3,
        purchase_date: new Date(),
      },
      {
        product_id: 2,
        customer_id: 2,
        purchase_date: new Date(),
      },
      {
        product_id: 2,
        customer_id: 3,
        purchase_date: new Date(),
      },
      {
        product_id: 3,
        customer_id: 1,
        purchase_date: new Date(),
      },
      {
        product_id: 3,
        customer_id: 3,
        purchase_date: new Date(),
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products_customers', null, {});
  }
};
