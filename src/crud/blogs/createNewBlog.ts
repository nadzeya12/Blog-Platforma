import {Response, Request} from "express";
import {blogRepository} from "../../Repositories/BlogRepository";
import {BlogInputModel, BlogViewModel} from "../../db/db-blogs-and-posts";
import {mapToBlogViewModel} from "../../core/utils/map-to-viewModel";
import {ObjectId} from "mongodb";

export async function createNewBlog(req: Request< BlogInputModel>, res: Response) {

    try {
        const newBlog: BlogInputModel = {
            name: req.body.name,
            description: req.body.description,
            websiteUrl: req.body.websiteUrl,
        };
        const newBlogView: BlogViewModel = {
            // id: `blog_${Date.now()}_${Math.floor(Math.random() * 1000)}` as string, // Простой уникальный ID
            _id: new ObjectId().toString(),
            createdAt: new Date().toISOString(),
            isMembership: false,
            ...newBlog
        }

        const createdBlog = await blogRepository.create(newBlogView);
        const mappedCreatedBlog = mapToBlogViewModel(createdBlog);
        res.status(201).send(mappedCreatedBlog);
    } catch (err){
        res.status(400).send(err);
    }
}
