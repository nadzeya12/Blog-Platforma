import {Response, Request} from "express";
import {postsRepository} from "../../Repositories/PostsRepository";
import {db, PostInputModel, PostViewModel} from "../../db/db-blogs-and-posts";
import {mapToPostViewModel} from "../../core/utils/map-to-viewModel";
import {ObjectId} from "mongodb";

export async function createNewPost(req: Request<{id: string}, PostInputModel>, res: Response) {

    try {
        const index: number = db.Posts.findIndex((post: PostViewModel) => post.id === post.id);
        const newPost : PostInputModel = {
            title: req.body.title,
            shortDescription: req.body.shortDescription,
            content: req.body.content,
            blogId: req.body.blogId,
        }
        const newPostView: PostViewModel = {
            ...newPost,
            id: new ObjectId().toString(),
            blogName: db.Posts[index].blogName,
            createdAt: new Date().toISOString(),
        }
        const createdPost = await postsRepository.create(newPostView);
        const mappedCreatedPost = mapToPostViewModel(createdPost);
        res.status(201).send(mappedCreatedPost);
    } catch (err) {
        res.status(400).send(err);
    }
}