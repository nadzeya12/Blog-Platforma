import {Response, Request} from "express";
import {blogRepository} from "../../Repositories/BlogRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";

export function deleteBlogById(req: Request, res: Response) {
    const id = req.params.id;
    const blog = blogRepository.findById(id);

    if (!blog) {
        res.status(404).send(createErrorMessages([{
            field: 'id',
            message: `No blog with id ${id}`,
        }]));
        return;
    }
    blogRepository.delete(id);
    res.status(204).send("blog deleted successfully");
}