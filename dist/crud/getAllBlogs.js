"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBlogs = getAllBlogs;
require("express");
const BlogRepository_1 = require("../Repositories/BlogRepository");
function getAllBlogs(req, res) {
    const Blogs = BlogRepository_1.blogRepository.findAll();
    res.status(200).send(Blogs);
}
