'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Cars',
    [
      {
        car_plate: "ABC123",
        car_model: "Mazda"
      },
      {
        car_plate: "DEF456",
        car_model: "Chevrolet"
      },
      {
        car_plate: "GHI789",
        car_model: "BMW"
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Cars', null, {})
};
