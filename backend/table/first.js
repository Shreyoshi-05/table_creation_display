import { Sequelize, DataTypes } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement:true,
      primaryKey:true
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  }
);