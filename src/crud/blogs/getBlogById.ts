import {Response, Request} from "express";
import {blogRepository} from "../../Repositories/BlogRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";

export function getBlogById(req: Request, res: Response) {
    const id = req.params.id;
    const blog = blogRepository.findById(id);

    if (!blog) {
        res.status(404).send(createErrorMessages([{
            field: 'id',
            message: `No blog with id ${id}`,
        }]));
        return;
    }
    res.status(200).send(blog);
}