'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    account_type: {
      type: DataTypes.ENUM('Admin', 'Manager'),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  return User;
};