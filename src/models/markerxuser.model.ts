import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { User } from "./user.model";
import { Marker } from "./marker.model";
import { iMarkersxUsers } from "../intefaces/markerxuser.interface";

export const MarkersxUser= sequelize
.define<iMarkersxUsers>('markersxuser',
        {id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        userid:{
               type: DataTypes.INTEGER,
            }, 
        markerid:{
                type: DataTypes.INTEGER,  
             }, 
        },
        {
            tableName: 'markerxsusers',
              timestamps: false,
        },
);

User.belongsToMany(Marker, { through: MarkersxUser, foreignKey: 'userid' });
Marker.belongsToMany(User, { through: MarkersxUser, foreignKey: 'markerid' });

