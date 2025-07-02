import {Response, Request} from "express";
import {postsRepository} from "../../Repositories/PostsRepository";
import {PostInputModel, PostViewModel} from "../../db/db-blogs-and-posts";
import {mapToPostViewModel} from "../../core/utils/map-to-viewModel";
import {ObjectId} from "mongodb";
import {blogRepository} from "../../Repositories/BlogRepository";

export async function createNewPost(req: Request<{id: string}, PostInputModel>, res: Response) {

    try {

        const newPost : PostInputModel = {
            title: req.body.title,
            shortDescription: req.body.shortDescription,
            content: req.body.content,
            blogId: req.body.blogId,
        }

        const blog = await blogRepository.findById(req.body.blogId);
        if(!blog) {
            res.send('Blog with this id does not exist').status(400);
            return;
        }
        const newPostView: PostViewModel = {
            ...newPost,
            id: new ObjectId().toString(),
            blogName: blog.name,
            createdAt: new Date().toISOString(),
        }
        const createdPost = await postsRepository.create(newPostView);
        const mappedCreatedPost = mapToPostViewModel(createdPost);
        res.status(201).send(mappedCreatedPost);
    } catch (err) {
        res.status(400).send(err);
    }
}