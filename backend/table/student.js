import { Sequelize, DataTypes } from 'sequelize';
import { db } from '../db/db.js';


export const students = db.define(
  'students',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey:true
    },
    name:{
      type:DataTypes.STRING,
    }
  }
);