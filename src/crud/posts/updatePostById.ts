import {Response, Request} from "express";
import {createErrorMessages} from "../../core/utils/errorUtil";
import {PostInputModel} from "../../db/db-blogs-and-posts";
import {postsRepository} from "../../Repositories/PostsRepository";

export async function updatePostById(req: Request<{id: string}, PostInputModel>, res: Response) {
    try {
        const id = req.params.id;
        const post = postsRepository.findById(id);

        if (!post) {
            res.status(404).send(createErrorMessages([{
                field: 'id',
                message: 'post does not exist',
            }]))
            return;
        }
        await  postsRepository.update(id, req.body);
        res.status(204)

    } catch (err) {
        res.status(404).send(err);
    }
}
