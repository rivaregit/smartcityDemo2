"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marker = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Marker = connection_1.default
    .define('marker', { id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    markername: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: false
    },
    markerlng: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: false
    },
    markerlat: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: false
    },
}, {
    timestamps: false,
});
