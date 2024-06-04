"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: "Get users"
    });
};
exports.getUsers = getUsers;
const newUser = (req, res) => {
    console.log('newUser body:', req.body);
    res.json({
        msg: 'mock new user created',
        body: req.body
    });
};
exports.newUser = newUser;
const loginUser = (req, res) => {
    console.log('login body:', req.body);
    res.json({
        msg: 'mock login user logged',
        body: req.body
    });
};
exports.loginUser = loginUser;
