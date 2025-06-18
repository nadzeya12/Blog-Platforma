import {Response, Request} from "express";
import {postsRepository} from "../../Repositories/PostsRepository";
import {blogRepository} from "../../Repositories/BlogRepository";
import {db, PostInputModel, PostViewModel} from "../../db/db-blogs-and-posts";

export function     createNewPost(req: Request<PostInputModel>, res: Response) {
    const newPost: PostInputModel = {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
    };
    const blog = blogRepository.findById(newPost.blogId);
    if (!blog) {
         res.status(400).send({ error: "Blog not found" });
        return
    }
    const createdPost: PostViewModel = {
        id: `post_${Date.now()}_${Math.floor(Math.random() * 1000)}` as string, // Простой уникальный ID
        ...newPost,
        blogName: blog.name
    }
    db.Posts.push(createdPost);
    postsRepository.create(createdPost);
    res.status(201).send(createdPost);
}