'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    account_type: {
      type: DataTypes.ENUM('Admin', 'Manager'),
      allowNull: false,
      validate: {
        isIn: {
          args: [['Admin', 'Manager']],
          msg: "Must be 'Admin' or 'Manager'"
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Not a valid email"
        }
      }
    }
  }, {});
  return User;
};