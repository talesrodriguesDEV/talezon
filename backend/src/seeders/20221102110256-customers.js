'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('customers',
    [
      {
        id: 1,
        name: 'Talão',
        email: 'tales@tales.com',
        password: '123',
      },
      {
        id: 2,
        name: 'Teobalda',
        email: 'teo@balda.com',
        password: '456',
      },
      {
        id: 3,
        name: 'Ciclano',
        email: 'ciclano@cic.com',
        password: '789',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  }
};
