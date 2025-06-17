"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogById = updateBlogById;
const BlogRepository_1 = require("../Repositories/BlogRepository");
const errorUtil_1 = require("../core/utils/errorUtil");
function updateBlogById(req, res) {
    const id = req.params.id;
    const blog = BlogRepository_1.blogRepository.findById(id);
    const updateData = req.body;
    if (!blog) {
        res.status(404).send((0, errorUtil_1.createErrorMessages)([{
                field: 'id',
                message: 'blog does not exist',
            }]));
        return;
    }
    const updatedBlog = {
        ...blog,
        name: updateData.name,
        description: updateData.description,
        websiteUrl: updateData.websiteUrl,
    };
    BlogRepository_1.blogRepository.update(id, updatedBlog);
    res.status(204).send();
}
