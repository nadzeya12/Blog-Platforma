import "express";
import { Request, Response } from 'express';
import {blogRepository} from "../../Repositories/BlogRepository";
import {mapToBlogViewModel} from "../../core/utils/map-to-viewModel";

export async function getAllBlogs(req: Request, res: Response) {
    try {
        const Blogs = await blogRepository.findAll();
        const mapBlogs = Blogs.map(mapToBlogViewModel)
        res.status(200).send(mapBlogs);
    } catch (err) {
        res.status(404).send(err);
    }
}