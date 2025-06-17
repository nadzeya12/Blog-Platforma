import {Response, Request} from "express";
import {createErrorMessages} from "../../core/utils/errorUtil";
import {PostInputModel, PostViewModel} from "../../db/db-blogs-and-posts";
import {postsRepository} from "../../Repositories/PostsRepository";

export function updatePostById(req: Request<{id: string}, PostInputModel>, res: Response) {
    const id = req.params.id;
    const post: PostViewModel = postsRepository.findById(id);
    const updateData: PostViewModel = req.body;

    if (!post) {
        res.status(404).send(createErrorMessages([{
            field: 'id',
            message: 'post does not exist',
        }]))
        return;
    }
    const updatedPost: PostViewModel = {
        ...post,
        title: updateData.title,
        shortDescription: updateData.shortDescription,
        content: updateData.content,
        blogId: updateData.blogId
    }
    postsRepository.update(updatedPost);
    res.status(204).send();
}
