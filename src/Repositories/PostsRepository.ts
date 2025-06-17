import {db, PostInputModel, PostViewModel} from "../db/db-blogs-and-posts";

export const postsRepository = {
    findAll(): PostViewModel[] {
        return db.Posts
    },
    findById(id: string): PostViewModel {
        return db.Posts.find(post => post.id === id) as PostViewModel;
    },
    create(createdPost: PostViewModel): PostViewModel {
        db.Posts.push()
        return createdPost;
    },
    update ( updatedPost: PostViewModel): PostViewModel {
        const index: number = db.Posts.findIndex((post: PostViewModel) => post.id === post.id);

        if (index === -1) {
            throw new Error("Post does not exist");
        }

        db.Posts[index] = updatedPost;
        return updatedPost;
    },
    delete(id: string): PostViewModel {
        const index = db.Posts.findIndex(blog => blog.id === id);
        if (index === -1) {
            throw new Error("Blog does not exist");
        }
        return db.Posts.find(post => post.id === id) as PostViewModel;
        db.Posts.splice(index, 1)
    },
}