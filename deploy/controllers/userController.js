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
exports.loginUser = exports.newUser = exports.getUsers = void 0;
// import bcrypt from 'bcrypt';
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listUsers = yield user_model_1.User.findAll();
        res.json({
            listUsers,
            msg: "Get users"
        });
    }
    catch (error) {
        console.log('Ha ocurrido el error:', error);
    }
});
exports.getUsers = getUsers;
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Validamos si el usuario ya existe en la base de datos
    const user = yield user_model_1.User.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        });
    }
    // const hashedPassword = await bcrypt.hash(password, 10); 
    try {
        // Guardarmos usuario en la b ase de d atos
        yield user_model_1.User.create({
            username: username,
            password: password
        });
        res.json({
            msg: `Usuario ${username} creado exitosamente!`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    console.log('username es:', username, ' email es:', email, ' y passw es:', password);
    // Validamos si el usuario existe en la base de datos
    // const user: any = await User.findOne({ where: { username: username } });
    const user = yield user_model_1.User.findOne({ where: { username: username } });
    console.log('user es:', user);
    if (!user) {
        return res.status(400).json({
            // msg: `No existe un usuario con el nombre ${username} en la base datos`
            msg: `No existe un usuario con el nombre ${email} en la base datos`
        });
    }
    // Validamos password
    let passwordValid = false;
    if (password == user.password)
        passwordValid = true;
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password Incorrecta`
        });
    }
    console.log('Ha llegado hasta el comienzo del token');
    // Generamos token
    const token = jsonwebtoken_1.default.sign({
        //username: username
        username: email
    }, process.env.SECRET_KEY || 'pepito1243');
    console.log('token es:', token);
    const responseData = {
        email: email,
        username: email,
        sucessed: "1",
        token: token
    };
    //  res.json(token);
    // return res.json(200).send(responseData );
    return res.json(responseData);
});
exports.loginUser = loginUser;
// import { Request, Response } from "express";
// export const getUsers= (req:Request, res:Response)=>
// {
//     res.json({
//         msg: "Get users"
//     })
// }
// export const newUser=(req:Request, res:Response)=>{
//    // console.log('newUser body:', req.body);
//     const {body}=req;
//     res.json({
//         msg:'mock new user created',
//         body
//         // body: req.body
//     })
// }
// export const loginUser=(req:Request, res:Response)=>{
//     console.log('login body:', req.body);
//     res.json({
//         msg:'mock login user logged',
//         body: req.body
//     })
// }
