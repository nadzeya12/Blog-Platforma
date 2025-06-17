"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const blogsRouter_1 = require("./crud/blogsRouter");
const testing_rout_1 = require("./crud/testing-rout");
const postsRouter_1 = require("./crud/postsRouter");
const setupApp = (app) => {
    app.use(express_1.default.json()); //middleware express.json() парсит JSON в теле запроса и добавляет его как объект в свойство body запроса (req.body.).
    app.get('/', (req, res) => {
        res.send('Hello World').status(200);
    });
    app.use(blogsRouter_1.blogsRouter);
    app.use(postsRouter_1.postsRouter);
    app.use(testing_rout_1.testingRout);
    return app;
};
exports.setupApp = setupApp;
