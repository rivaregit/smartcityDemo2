"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkersxUser = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const user_model_1 = require("./user.model");
const marker_model_1 = require("./marker.model");
exports.MarkersxUser = connection_1.default
    .define('markersxuser', { id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    userid: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    markerid: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    tableName: 'markerxsusers',
    timestamps: false,
});
user_model_1.User.belongsToMany(marker_model_1.Marker, { through: exports.MarkersxUser, foreignKey: 'userid' });
marker_model_1.Marker.belongsToMany(user_model_1.User, { through: exports.MarkersxUser, foreignKey: 'markerid' });
