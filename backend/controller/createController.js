import { Sequelize, DataTypes } from 'sequelize';
import { db } from '../db/db.js';

export const createRouterController = (req,res) =>{
  try {
    const name = req.body.name;
    const data = req.body.data;

    data.forEach((item)=>{
      let key = item.name;
      let val = item.val;

      const name = db.define(
      name,
      {
        id:{
          type: DataTypes.INTEGER,
          allowNull:false,
          autoIncrement:true,
          primaryKey:true
        },
        key: {
          type: DataTypes.val,
        }
      }
    );
    })



  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}