import {Response, Request} from "express";
import {postsRepository} from "../../Repositories/PostsRepository";
import {createErrorMessages} from "../../core/utils/errorUtil";
import {mapToPostViewModel} from "../../core/utils/map-to-viewModel";
import {WithId} from "mongodb";
import {PostViewModel} from "../../db/db-blogs-and-posts";

export async function getPostById(req: Request, res: Response) {
    try {
        const id = req.params._id;
        const post: WithId<PostViewModel> | null = await postsRepository.findById(id);

        if (!post) {
            res.status(404).send(createErrorMessages([{
                field: 'id',
                message: `No post with id ${id}`,
            }]));
            return;
        }
        const mapPost = mapToPostViewModel(post);
        res.status(200).send(mapPost);
    } catch (err) {
        res.status(404).send(err);
    }
}