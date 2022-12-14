'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products_customers', {
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      customer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      purchase_date: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('products_customers');
  }
};
