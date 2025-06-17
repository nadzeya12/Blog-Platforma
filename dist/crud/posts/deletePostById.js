"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostById = deletePostById;
const PostsRepository_1 = require("../../Repositories/PostsRepository");
const errorUtil_1 = require("../../core/utils/errorUtil");
function deletePostById(req, res) {
    const id = req.params.id;
    const post = PostsRepository_1.postsRepository.findById(id);
    if (!post) {
        res.status(404).send((0, errorUtil_1.createErrorMessages)([{
                field: 'id',
                message: `No blog with id ${id}`,
            }]));
        return;
    }
    PostsRepository_1.postsRepository.delete(id);
    res.status(204).send("blog deleted successfully");
}
