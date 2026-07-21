import { Sequelize, DataTypes } from 'sequelize';
import { db } from '../db/db.js';


export const attendence = db.define(
  'attendence',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    date:{
      type:DataTypes.DATEONLY,
      allowNull:false
    },
    status:{
      type: DataTypes.ENUM("present", "absent"), 
      allowNull: false
    }

  }
);