"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogById = deleteBlogById;
const BlogRepository_1 = require("../Repositories/BlogRepository");
const errorUtil_1 = require("../core/utils/errorUtil");
function deleteBlogById(req, res) {
    const id = req.params.id;
    const blog = BlogRepository_1.blogRepository.findById(id);
    if (!blog) {
        res.status(404).send((0, errorUtil_1.createErrorMessages)([{
                field: 'id',
                message: `No blog with id ${id}`,
            }]));
        return;
    }
    BlogRepository_1.blogRepository.delete(id);
    res.status(204).send("blog deleted successfully");
}
