"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Venta = connection_1.default.define('venta', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mes: {
        type: sequelize_1.DataTypes.STRING
    },
    numInmuebles: {
        type: sequelize_1.DataTypes.STRING
    },
    totalVentas: {
        type: sequelize_1.DataTypes.STRING
    }
});
