"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventaController_1 = require("../controllers/ventaController");
const router = (0, express_1.Router)();
router.get('/ventas', ventaController_1.getVentas);
exports.default = router;
