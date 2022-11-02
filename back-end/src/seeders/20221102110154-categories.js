'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('categories',
    [
      {
        id: '1',
        name: 'Smartphone',
      },
      {
        id: '2',
        name: 'Comida',
      },
      {
        id: '3',
        name: 'Carro',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
