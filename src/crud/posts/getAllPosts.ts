import "express";
import {Request, Response} from "express";
import {postsRepository} from "../../Repositories/PostsRepository";
import {mapToPostViewModel} from "../../core/utils/map-to-viewModel";

export async function getAllPosts(req: Request, res: Response) {
    try {
        const Posts = await postsRepository.findAll();
        const mapPosts = Posts.map(mapToPostViewModel);
        res.status(200).send(mapPosts);
    } catch (err) {
        res.status(404).send(err);
    }
}