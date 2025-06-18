import {Response, Request} from "express";
import {blogRepository} from "../../Repositories/BlogRepository";
import {BlogInputModel, BlogViewModel, db} from "../../db/db-blogs-and-posts";

export function createNewBlog(req: Request< BlogInputModel>, res: Response) {
const newBlog: BlogInputModel = {
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
    };
const createdBlog: BlogViewModel = {
    id: `blog_${Date.now()}_${Math.floor(Math.random() * 1000)}` as string, // Простой уникальный ID
    ...newBlog
}
    db.Blogs.push(createdBlog);
blogRepository.create(createdBlog);
res.status(201).send(createdBlog);
}
