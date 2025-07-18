import {Response, Request} from "express";
import {blogRepository} from "../../Repositories/BlogRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";
import {BlogInputModel} from "../../db/db-blogs-and-posts";

export async function updateBlogById(req: Request<{id: string}, BlogInputModel>, res: Response) {
    try {
        const id = req.params.id;
        const blog =await blogRepository.findById(id);
        console.log('blog', blog);
        if (!blog) {
            res.status(404).send(createErrorMessages([{
                field: 'id',
                message: 'blog does not exist',
            }]))
            return;
        }
        // const updatedBlog: BlogViewModel = {
        //     ...blog,
        //     name: updateData.name,
        //     description: updateData.description,
        //     websiteUrl: updateData.websiteUrl
        // };
       await blogRepository.update(id, req.body);
       res.status(204).send("Blog updated successfully.");
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
}
