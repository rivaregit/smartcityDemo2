import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { iMarker } from "../intefaces/marker.interface";

export const Marker= sequelize
.define<iMarker>('marker',
        {id:{
               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement:true
            }, 
         markername:{
               type:DataTypes.STRING,
               unique:false,
               allowNull:false
            },
        markerlng:{
                type:DataTypes.STRING,
                unique:false,
                allowNull:false
             },
        markerlat:{
                type:DataTypes.STRING,
                unique:false,
                allowNull:false
             },

        },
        {
              timestamps: false,
        },
);

