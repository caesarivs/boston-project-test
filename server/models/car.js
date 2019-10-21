'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    car_plate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    car_model: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  return Car;
};