import {Response, Request} from "express";
import {blogRepository} from "../../Repositories/BlogRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";
import {BlogInputModel, BlogViewModel} from "../../db/db-blogs-and-posts";

export function updateBlogById(req: Request<{id: string}, BlogInputModel>, res: Response) {
    const id = req.params.id;
    const blog = blogRepository.findById(id);
    const updateData: BlogInputModel = req.body;

    if (!blog) {
        res.status(404).send(createErrorMessages([{
            field: 'id',
            message: 'blog does not exist',
        }]))
        return;
    }
    const updatedBlog: BlogViewModel = {
        ...blog,
        name: updateData.name,
        description: updateData.description,
        websiteUrl: updateData.websiteUrl,
    };
    blogRepository.update(id, updatedBlog);
    res.status(204).send();
}
