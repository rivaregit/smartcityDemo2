"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const serrver_1 = __importDefault(require("./models/serrver"));
dotenv_1.default.config();
const server = new serrver_1.default();
