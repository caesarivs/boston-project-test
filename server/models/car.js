'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    car_plate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: /^[A-Z][A-Z][A-Z][0-9][0-9][0-9]$/,
          msg: "Plate must be of the ABC123 form"
        }
      }
    },
    car_model: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  return Car;
};