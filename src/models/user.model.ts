import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { iUser } from "../intefaces/user.interface";

export const User= sequelize
.define<iUser>('user',
        {id:{
               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement:true
            }, 
         username:{
               type:DataTypes.STRING,
               unique:true,
               allowNull:false
            },
         password:{
               type: DataTypes.STRING,
               allowNull:false
            } 
        },
        {
              timestamps: false,
        },
);
