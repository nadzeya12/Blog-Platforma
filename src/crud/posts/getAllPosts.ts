import "express";
import {Request, Response} from "express";
import {PostViewModel} from "../../db/db-blogs-and-posts";
import {postsRepository} from "../../Repositories/PostsRepository";

export function getAllPosts(req: Request, res: Response) {
    const Posts: PostViewModel[] = postsRepository.findAll();
    res.status(200).send(Posts);
}