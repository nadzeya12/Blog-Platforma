"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = getPostById;
const PostsRepository_1 = require("../../Repositories/PostsRepository");
const errorUtil_1 = require("../../core/utils/errorUtil");
function getPostById(req, res) {
    const id = req.params.id;
    const post = PostsRepository_1.postsRepository.findById(id);
    if (!post) {
        res.status(404).send((0, errorUtil_1.createErrorMessages)([{
                field: 'id',
                message: `No blog with id ${id}`,
            }]));
        return;
    }
    res.status(200).send(post);
}
