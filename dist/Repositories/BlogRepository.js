"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRepository = void 0;
const db_blogs_and_posts_1 = require("../db/db-blogs-and-posts");
exports.blogRepository = {
    findAll() {
        return db_blogs_and_posts_1.db.Blogs;
    },
    findById(id) {
        return db_blogs_and_posts_1.db.Blogs.find(blog => blog.id === id);
    },
    delete(id) {
        const index = db_blogs_and_posts_1.db.Blogs.findIndex(blog => blog.id === id);
        if (index === -1) {
            throw new Error("Blog does not exist");
        }
        return db_blogs_and_posts_1.db.Blogs.find(blog => blog.id === id);
        db_blogs_and_posts_1.db.Blogs.splice(index, 1);
    },
    create(createdBlog) {
        db_blogs_and_posts_1.db.Blogs.push();
        return createdBlog;
    },
    update(id, updatedBlog) {
        const index = db_blogs_and_posts_1.db.Blogs.findIndex((blog) => blog.id === id);
        if (index === -1) {
            throw new Error("Blog does not exist");
        }
        const updatedBlogWithId = {
            ...updatedBlog,
            id: db_blogs_and_posts_1.db.Blogs[index].id
        };
        db_blogs_and_posts_1.db.Blogs[index] = updatedBlogWithId;
        return updatedBlogWithId;
    }
};
