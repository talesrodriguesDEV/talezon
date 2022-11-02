'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('categories',
    [
      {
        id: '1',
        name: 'Smartphones',
      },
      {
        id: '2',
        name: 'Foods',
      },
      {
        id: '3',
        name: 'Cars',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
