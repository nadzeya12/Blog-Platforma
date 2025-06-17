import "express";
import { Request, Response } from 'express';
import {blogRepository} from "../../Repositories/BlogRepository";
import {BlogViewModel} from "../../db/db-blogs-and-posts";

export function getAllBlogs(req: Request, res: Response) {
    const Blogs: BlogViewModel[] = blogRepository.findAll();
    res.status(200).send(Blogs);
}