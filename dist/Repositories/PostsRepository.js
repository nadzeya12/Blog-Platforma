"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepository = void 0;
const db_blogs_and_posts_1 = require("../db/db-blogs-and-posts");
exports.postsRepository = {
    findAll() {
        return db_blogs_and_posts_1.db.Posts;
    },
    findById(id) {
        return db_blogs_and_posts_1.db.Posts.find(post => post.id === id);
    },
    create(createdPost) {
        db_blogs_and_posts_1.db.Posts.push();
        return createdPost;
    },
    update(updatedPost) {
        const index = db_blogs_and_posts_1.db.Posts.findIndex((post) => post.id === post.id);
        if (index === -1) {
            throw new Error("Post does not exist");
        }
        db_blogs_and_posts_1.db.Posts[index] = updatedPost;
        return updatedPost;
    },
    delete(id) {
        const index = db_blogs_and_posts_1.db.Posts.findIndex(blog => blog.id === id);
        if (index === -1) {
            throw new Error("Blog does not exist");
        }
        return db_blogs_and_posts_1.db.Posts.find(post => post.id === id);
        db_blogs_and_posts_1.db.Posts.splice(index, 1);
    },
};
