"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRout = void 0;
const express_1 = require("express");
const db_blogs_and_posts_1 = require("../db/db-blogs-and-posts");
exports.testingRout = (0, express_1.Router)();
exports.testingRout.delete("/testing-data", (req, res) => {
    db_blogs_and_posts_1.db.Blogs = [];
    db_blogs_and_posts_1.db.Posts = [];
    res.status(204).send('');
    return;
});
