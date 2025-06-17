"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewPost = createNewPost;
const PostsRepository_1 = require("../../Repositories/PostsRepository");
const BlogRepository_1 = require("../../Repositories/BlogRepository");
function createNewPost(req, res) {
    const newPost = {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
    };
    const blog = BlogRepository_1.blogRepository.findById(newPost.blogId);
    if (!blog) {
        res.status(400).send({ error: "Blog not found" });
        return;
    }
    const createdPost = {
        id: `post_${Date.now()}_${Math.floor(Math.random() * 1000)}`, // Простой уникальный ID
        ...newPost,
        blogName: blog.name
    };
    PostsRepository_1.postsRepository.create(createdPost);
    res.status(201).send(createdPost);
}
