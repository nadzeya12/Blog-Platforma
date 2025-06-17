"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRouter = void 0;
const express_1 = require("express");
const getAllBlogs_1 = require("./blogs/getAllBlogs");
const getBlogById_1 = require("./blogs/getBlogById");
const deleteBlogById_1 = require("./blogs/deleteBlogById");
const createNewBlog_1 = require("./blogs/createNewBlog");
const updateById_1 = require("./blogs/updateById");
const blogs_and_posts_dto_validation_1 = require("../validation/blogs-and-posts-dto-validation");
const auth_1 = require("../authorization/auth");
exports.blogsRouter = (0, express_1.Router)({});
exports.blogsRouter
    .get("/blogs", getAllBlogs_1.getAllBlogs)
    .get("/blogs/:id", blogs_and_posts_dto_validation_1.idValidation, blogs_and_posts_dto_validation_1.validationResultMiddleware, getBlogById_1.getBlogById)
    .delete("/blogs/:id", auth_1.adminMiddleware, blogs_and_posts_dto_validation_1.idValidation, blogs_and_posts_dto_validation_1.validationResultMiddleware, deleteBlogById_1.deleteBlogById)
    .post("/blogs", auth_1.adminMiddleware, blogs_and_posts_dto_validation_1.blogsValidation, blogs_and_posts_dto_validation_1.validationResultMiddleware, createNewBlog_1.createNewBlog)
    .put("/blogs/:id", auth_1.adminMiddleware, blogs_and_posts_dto_validation_1.idValidation, blogs_and_posts_dto_validation_1.blogsValidation, blogs_and_posts_dto_validation_1.validationResultMiddleware, updateById_1.updateBlogById);
