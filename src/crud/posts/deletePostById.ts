import {Response, Request} from "express";
import {postsRepository} from "../../Repositories/PostsRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";

export async function deletePostById(req: Request, res: Response) {
    try {

        const id = req.params.id;
        const post = await postsRepository.findById(id);

        if (!post) {
        res.status(404).send(createErrorMessages([{
            field: 'id',
            message: `No post with id ${id}`,
        }]));
        return;
        }
        await postsRepository.delete(id);
        res.status(204).send("post deleted successfully");
    } catch (err){
        res.status(404).send(err);
    }
}