"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//definir un enrutaador
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRouters = new IndexRoutes();
exports.default = indexRouters.router;
