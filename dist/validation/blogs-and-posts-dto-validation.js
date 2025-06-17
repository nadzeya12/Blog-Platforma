"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationResultMiddleware = exports.createErrorMessages = exports.postsValidation = exports.postsBlogNameValidation = exports.postBlogIdValidation = exports.postContentValidation = exports.postShortDescriptionValidation = exports.postTitleValidation = exports.blogsValidation = exports.blogDescriptionValidation = exports.blogNameValidation = exports.idValidation = void 0;
const express_validator_1 = require("express-validator");
const db_blogs_and_posts_1 = require("../db/db-blogs-and-posts");
exports.idValidation = (0, express_validator_1.param)("id")
    .exists()
    .withMessage("ID is required")
    .isString()
    .withMessage("ID must be a string")
    .trim()
    .withMessage("ID cannot be empty");
exports.blogNameValidation = (0, express_validator_1.body)('name')
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .isLength({ min: 1, max: 15 })
    .withMessage("Name must be from 1 to 15 characters long");
exports.blogDescriptionValidation = (0, express_validator_1.body)("description")
    .isString()
    .withMessage("Description must be a string")
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage("Description must be from 1 to 500 characters long");
const websiteUrlValidation = (0, express_validator_1.body)("websiteUrl")
    .isString()
    .withMessage("websiteUrl must be a string")
    .notEmpty()
    .withMessage("websiteUrl must be not empty")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("websiteUrl must be must be from 1 to 100 characters long")
    .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
    .withMessage("Invalid website URL format");
exports.blogsValidation = [
    exports.blogNameValidation,
    exports.blogDescriptionValidation,
    websiteUrlValidation
];
exports.postTitleValidation = (0, express_validator_1.body)("title")
    .isString()
    .withMessage("Title must be a string")
    .notEmpty()
    .withMessage("Title cannot be empty")
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage("Title must be from 1 to 30 characters long");
exports.postShortDescriptionValidation = (0, express_validator_1.body)("shortDescription")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("ShortDescription must be a from 1 to 100 characters long")
    .isString()
    .withMessage("ShortDescription must be a string")
    .notEmpty()
    .withMessage("ShortDescription cannot be empty");
exports.postContentValidation = (0, express_validator_1.body)("content")
    .trim()
    .isLength({ min: 1, max: 1000 })
    .withMessage("Content must be 1 to 1000 characters long")
    .isString()
    .withMessage("Content must be a string")
    .notEmpty()
    .withMessage("Content cannot be empty");
exports.postBlogIdValidation = (0, express_validator_1.body)("blogId")
    .trim()
    .isString()
    .withMessage("BlogId must be a string")
    .notEmpty()
    .withMessage("BlogId cannot be empty")
    .custom((blogId) => {
    const blog = db_blogs_and_posts_1.db.Blogs.find(blog => blog.id === blogId);
    if (!blog) {
        throw new Error("Blog with this Id does not exist");
    }
    return true;
});
exports.postsBlogNameValidation = (0, express_validator_1.body)("blogName")
    .trim()
    .isString()
    .withMessage("BlogName must be a string")
    .notEmpty()
    .withMessage("BlogName cannot be empty")
    .custom((blogName) => {
    const blog = db_blogs_and_posts_1.db.Blogs.find(blog => blog.name === blogName);
    if (!blog) {
        throw new Error("Blog with this name doesn't exist");
    }
});
exports.postsValidation = [
    exports.postTitleValidation,
    exports.postShortDescriptionValidation,
    exports.postContentValidation,
    exports.postBlogIdValidation,
    //  postsBlogNameValidation,
];
const createErrorMessages = (errors) => {
    return { errorMessages: errors };
};
exports.createErrorMessages = createErrorMessages;
const formatErrors = (error) => {
    const exprressError = error;
    return {
        field: exprressError.path,
        message: exprressError.msg
    };
};
const validationResultMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req)
        .formatWith(formatErrors)
        .array({ onlyFirstError: true });
    if (errors.length > 0) {
        res.status(400).send({ errorMessages: errors });
        return;
    }
    next();
};
exports.validationResultMiddleware = validationResultMiddleware;
