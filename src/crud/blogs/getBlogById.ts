import {Response, Request} from "express";
import {blogRepository} from "../../Repositories/BlogRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";
import {mapToBlogViewModel} from "../../core/utils/map-to-viewModel";

export async function getBlogById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const blog = await blogRepository.findById(id);

        if (!blog) {
            res.status(404).send(createErrorMessages([{
                field: 'id',
                message: `No blog with id ${id}`,
            }]));
            return;
        }
        const mapBlog = mapToBlogViewModel(blog);
        res.status(200).send(mapBlog);
    } catch (err) {
        res.status(404).send(err);
    }
}