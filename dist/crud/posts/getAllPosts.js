"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = getAllPosts;
require("express");
const PostsRepository_1 = require("../../Repositories/PostsRepository");
function getAllPosts(req, res) {
    const Posts = PostsRepository_1.postsRepository.findAll();
    res.status(200).send(Posts);
}
