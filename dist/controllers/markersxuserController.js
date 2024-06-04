"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkersByUserId = exports.getUsersWithMarkers = void 0;
const markerxuser_model_1 = require("./../models/markerxuser.model");
const user_model_1 = require("../models/user.model");
const marker_model_1 = require("../models/marker.model");
//export const getUsersWithMarkers = async () => {
//export const getUsers2 = async (req:Request, res:Response) =>
const getUsersWithMarkers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield user_model_1.User.findAll({
            attributes: ['id', 'username'],
            include: [{
                    model: marker_model_1.Marker,
                    attributes: ['id', 'markername', 'markerlng', 'markerlat'],
                    through: {
                        attributes: []
                    }
                }]
        });
        res.json({ results,
            msg: "Get users2"
        });
    }
    catch (error) {
        console.error('Error fetching users with markers:', error);
    }
});
exports.getUsersWithMarkers = getUsersWithMarkers;
// src/controllers/markerController.js
// const db = require('../models');
// const Marker = db.Marker;
// const MarkersxUser = db.MarkersxUser;
const getMarkersByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    let tempData;
    try {
        const user = yield user_model_1.User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const markersxUser = yield markerxuser_model_1.MarkersxUser.findAll({ where: { userid: userId } });
        const markerIds = markersxUser.map(mxu => mxu.id);
        const markers = yield marker_model_1.Marker.findAll({ where: { id: markerIds } });
        const userMarkers = markers.map(marker => ({
            username: user.username,
            markerid: marker.id,
            markername: marker.markername,
            markerlng: marker.markerlng,
            markerlat: marker.markerlat
        }));
        //res.json(userMarkers);
        res.json(markers);
    }
    catch (e) {
        res.status(500).json({ message: `Ha ocurrido un error 500` });
    }
});
exports.getMarkersByUserId = getMarkersByUserId;
