"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostById = updatePostById;
const errorUtil_1 = require("../../core/utils/errorUtil");
const PostsRepository_1 = require("../../Repositories/PostsRepository");
function updatePostById(req, res) {
    const id = req.params.id;
    const post = PostsRepository_1.postsRepository.findById(id);
    const updateData = req.body;
    if (!post) {
        res.status(404).send((0, errorUtil_1.createErrorMessages)([{
                field: 'id',
                message: 'post does not exist',
            }]));
        return;
    }
    const updatedPost = {
        ...post,
        title: updateData.title,
        shortDescription: updateData.shortDescription,
        content: updateData.content,
        blogId: updateData.blogId
    };
    PostsRepository_1.postsRepository.update(updatedPost);
    res.status(204).send();
}
