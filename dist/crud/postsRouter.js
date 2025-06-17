"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const getAllPosts_1 = require("./posts/getAllPosts");
const getPostById_1 = require("./posts/getPostById");
const auth_1 = require("../authorization/auth");
const blogs_and_posts_dto_validation_1 = require("../validation/blogs-and-posts-dto-validation");
const createNewPost_1 = require("./posts/createNewPost");
const updatePostById_1 = require("./posts/updatePostById");
const deletePostById_1 = require("./posts/deletePostById");
exports.postsRouter = (0, express_1.Router)({});
exports.postsRouter
    .get("/posts", getAllPosts_1.getAllPosts)
    .get("/posts/:id", blogs_and_posts_dto_validation_1.idValidation, blogs_and_posts_dto_validation_1.validationResultMiddleware, getPostById_1.getPostById)
    .delete("/posts/:id", auth_1.adminMiddleware, blogs_and_posts_dto_validation_1.idValidation, blogs_and_posts_dto_validation_1.validationResultMiddleware, deletePostById_1.deletePostById)
    .post("/posts", auth_1.adminMiddleware, blogs_and_posts_dto_validation_1.postsValidation, blogs_and_posts_dto_validation_1.validationResultMiddleware, createNewPost_1.createNewPost)
    .put("/posts/:id", auth_1.adminMiddleware, blogs_and_posts_dto_validation_1.idValidation, blogs_and_posts_dto_validation_1.postsValidation, blogs_and_posts_dto_validation_1.validationResultMiddleware, updatePostById_1.updatePostById);
