import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Venta = sequelize.define('venta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mes: {
        type: DataTypes.STRING
    },
    numInmuebles: {
        type: DataTypes.STRING
    },
    totalVentas: {
        type: DataTypes.STRING
    }


}, )