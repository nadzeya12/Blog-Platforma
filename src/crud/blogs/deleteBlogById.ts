import {Response, Request} from "express";
import {blogRepository} from "../../Repositories/BlogRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";
import {BlogViewModel, db} from "../../db/db-blogs-and-posts";

export function deleteBlogById(req: Request, res: Response) {
    const id = req.params.id;
    const index = db.Blogs.findIndex((blog: BlogViewModel) => blog.id === id);

    if (index === -1) {
        res.status(404).send(createErrorMessages([{
            field: 'id',
            message: `No blog with id ${id}`,
        }]));
        return;
    }


    blogRepository.delete(id);
    res.status(204).send("blog deleted successfully");
}