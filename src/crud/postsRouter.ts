import {Router} from "express";
import {getAllPosts} from "./posts/getAllPosts";
import {getPostById} from "./posts/getPostById";
import {adminMiddleware} from "../authorization/auth";
import {idValidation, postsValidation, validationResultMiddleware} from "../validation/blogs-and-posts-dto-validation";
import {updatePostById} from "./posts/updatePostById";
import {deletePostById} from "./posts/deletePostById";
import {createNewPost} from "./posts/createNewPost";

export const postsRouter = Router({});

postsRouter
    .get("/posts", getAllPosts)
    .get("/posts/:id", idValidation, validationResultMiddleware, getPostById)
    .delete("/posts/:id", adminMiddleware, idValidation, validationResultMiddleware, deletePostById)
    .post("/posts", adminMiddleware,postsValidation, validationResultMiddleware, createNewPost)
    .put("/posts/:id", adminMiddleware, idValidation, postsValidation, validationResultMiddleware, updatePostById)
