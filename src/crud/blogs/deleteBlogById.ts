import {Response, Request} from "express";
import {blogRepository} from "../../Repositories/BlogRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";
import {BlogViewModel, db} from "../../db/db-blogs-and-posts";

export async function deleteBlogById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        // const index = db.Blogs.findIndex((blog: BlogViewModel) => blog.id === id);
        const blog = await blogRepository.findById(id);

        if (!blog) {
            res.status(404).send(createErrorMessages([{
                field: 'id',
                message: `No blog with id ${id}`,
            }]));
            return;
        }
        await blogRepository.delete(id);
        res.status(204).send("blog deleted successfully");
    } catch (err){
        res.status(404).send(err);
    }
}