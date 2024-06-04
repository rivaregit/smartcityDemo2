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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const ventas_1 = __importDefault(require("../routes/ventas"));
const cors_1 = __importDefault(require("cors"));
const user_model_1 = require("./user.model");
const ventas_model_1 = require("./ventas.model");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        //  this.port='3000';
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
        console.log(process.env.PORT);
    }
    // listen() {
    //     this.app.listen(this.port, ()=>{
    //         console.log('Aplicacion corriendo en pto345  '+ this.port);
    //     })
    // }
    listen() {
        this.app.listen();
    }
    routes() {
        this.app.use('/api/', user_1.default);
        this.app.use('/api/', ventas_1.default);
    }
    midlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_model_1.User.sync();
                yield ventas_model_1.Venta.sync();
                console.log('db connected');
            }
            catch (_a) {
                console.log(Error);
                console.log('Error al conectarse a la db');
            }
        });
    }
}
exports.default = Server;
