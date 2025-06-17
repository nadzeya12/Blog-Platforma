"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const setup_app_1 = require("./setup-app");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
(0, setup_app_1.setupApp)(app);
const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
