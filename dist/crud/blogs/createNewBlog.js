"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewBlog = createNewBlog;
const BlogRepository_1 = require("../../Repositories/BlogRepository");
function createNewBlog(req, res) {
    const newBlog = {
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
    };
    const createdBlog = {
        id: `blog_${Date.now()}_${Math.floor(Math.random() * 1000)}`, // Простой уникальный ID
        ...newBlog
    };
    BlogRepository_1.blogRepository.create(createdBlog);
    res.status(201).send(createdBlog);
}
