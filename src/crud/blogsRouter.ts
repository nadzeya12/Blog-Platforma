import {Router} from "express";
import {getAllBlogs} from "./blogs/getAllBlogs";
import {getBlogById} from "./blogs/getBlogById";
import {deleteBlogById} from "./blogs/deleteBlogById";
import {createNewBlog} from "./blogs/createNewBlog";
import {updateBlogById} from "./blogs/updateById";
import {blogsValidation, idValidation, validationResultMiddleware} from "../validation/blogs-and-posts-dto-validation";
import {adminMiddleware} from "../authorization/auth";

export const blogsRouter = Router({});

blogsRouter
    .get("/blogs", getAllBlogs)
    .get("/blogs/:id", idValidation, validationResultMiddleware, getBlogById)
    .delete("/blogs/:id", adminMiddleware, idValidation, validationResultMiddleware, deleteBlogById)
    .post("/blogs", adminMiddleware, blogsValidation, validationResultMiddleware, createNewBlog)
    .put("/blogs/:id",adminMiddleware, idValidation,blogsValidation, validationResultMiddleware,updateBlogById)

