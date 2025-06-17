import {Response, Request} from "express";
import {postsRepository} from "../../Repositories/PostsRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";

export function getPostById(req: Request, res: Response) {
    const id = req.params.id;
    const post = postsRepository.findById(id);

    if (!post) {
        res.status(404).send(createErrorMessages([{
            field: 'id',
            message: `No blog with id ${id}`,
        }]));
        return;
    }
    res.status(200).send(post);
}