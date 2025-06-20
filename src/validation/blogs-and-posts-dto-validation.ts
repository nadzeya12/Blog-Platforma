import {body, param, validationResult, FieldValidationError, ValidationError} from "express-validator";
import {Request, Response, NextFunction} from "express";
import {validationErrorType} from "../types/validationErrorType";
import {validationErrorDto} from "../types/errordto";
import {db} from "../db/db-blogs-and-posts";

export const idValidation = param("id")
    .exists()
    .withMessage("ID is required")
    .isString()
    .withMessage("ID must be a string")
    .trim()
    .withMessage("ID cannot be empty")

export const blogNameValidation = body('name')
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .isLength({ min: 1, max: 15 })
    .withMessage("Name must be from 1 to 15 characters long");

export const blogDescriptionValidation = body("description")
.isString()
.withMessage("Description must be a string")
.trim()
.isLength({ min: 1, max: 500 })
.withMessage("Description must be from 1 to 500 characters long");

const websiteUrlValidation = body("websiteUrl")
.isString()
.withMessage("websiteUrl must be a string")
    .notEmpty()
.withMessage("websiteUrl must be not empty")
.trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("websiteUrl must be must be from 1 to 100 characters long")
    .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
    .withMessage("Invalid website URL format");

export const blogsValidation = [
    websiteUrlValidation,
    blogNameValidation,
    blogDescriptionValidation
]


export const postTitleValidation = body("title")
    .isString()
    .withMessage("Title must be a string")
    .notEmpty()
    .withMessage("Title cannot be empty")
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage("Title must be from 1 to 30 characters long")

export const postShortDescriptionValidation = body("shortDescription")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("ShortDescription must be a from 1 to 100 characters long")
    .isString()
    .withMessage("ShortDescription must be a string")
    .notEmpty()
    .withMessage("ShortDescription cannot be empty")

export const postContentValidation = body("content")
    .trim()
    .isLength({ min: 1, max: 1000 })
    .withMessage("Content must be 1 to 1000 characters long")
    .isString()
    .withMessage("Content must be a string")
    .notEmpty()
    .withMessage("Content cannot be empty")

export const postBlogIdValidation = body("blogId")
    .trim()
    .isString()
    .withMessage("BlogId must be a string")
    .notEmpty()
    .withMessage("BlogId cannot be empty")
    .custom((blogId: string) => {
        const blog = db.Blogs.find(blog => blog.id === blogId);
        if (!blog) {
            throw new Error("Blog with this Id does not exist");
        }
        return true;
    })

export const postsBlogNameValidation = body("blogName")
    .trim()
    .isString()
    .withMessage("BlogName must be a string")
    .notEmpty()
    .withMessage("BlogName cannot be empty")
    .custom((blogName: string) => {
        const blog = db.Blogs.find(blog => blog.name === blogName);
        if (!blog) {
            throw new Error("Blog with this name doesn't exist");
        }
    })

export const postsValidation = [
    postShortDescriptionValidation,
    postTitleValidation,
    postContentValidation,
    postBlogIdValidation,
   //  postsBlogNameValidation,
]


export const createErrorMessages = (errors: validationErrorType[]): validationErrorDto => {
    return { errorsMessages: errors };
};

const formatErrors = (error: ValidationError): validationErrorType => {
    const exprressError = error as unknown as FieldValidationError;

    return {
        message: exprressError.msg,
        field: exprressError.path
    };
};

export const validationResultMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
     const errors = validationResult(req)
         .formatWith(formatErrors)
         .array({onlyFirstError: true});
    if (errors.length > 0) {
        const errorResponse = createErrorMessages(errors);
        res.status(400).json(errorResponse);
        return;
    }
    next();
}

