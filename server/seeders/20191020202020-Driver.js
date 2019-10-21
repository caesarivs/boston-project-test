'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Drivers',
    [
      {
        name: 'Jane Doe',
        birthdate: new Date()
      },
      {
        name: 'John Doe',
        birthdate: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Drivers', null, {})
};
