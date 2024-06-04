"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/users', userController_1.getUsers);
router.post('/users', userController_1.newUser);
router.post('/users/login', userController_1.loginUser);
exports.default = router;
