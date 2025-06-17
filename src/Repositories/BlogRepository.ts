import {db} from "../db/db-blogs-and-posts";
import {BlogInputModel} from "../db/db-blogs-and-posts";
import {BlogViewModel} from "../db/db-blogs-and-posts";

export const blogRepository = {
    findAll(): BlogViewModel[] {
        return db.Blogs
    },
    findById(id: string): BlogViewModel {
        return db.Blogs.find(blog => blog.id === id) as BlogViewModel;
},
    delete(id: string): BlogViewModel {
        const index = db.Blogs.findIndex(blog => blog.id === id);
        if (index === -1) {
            throw new Error("Blog does not exist");
        }
        return db.Blogs.find(blog => blog.id === id) as BlogViewModel;
        db.Blogs.splice(index, 1)
},
    create(createdBlog: BlogViewModel): BlogViewModel {
        db.Blogs.push()
    return createdBlog;
},
    update(id: string, updatedBlog: BlogInputModel): BlogViewModel {
        const   index: number = db.Blogs.findIndex((blog: BlogViewModel) => blog.id === id);

        if (index === -1) {
            throw new Error("Blog does not exist");
        }

        const updatedBlogWithId: BlogViewModel = {
            ...updatedBlog,
            id: db.Blogs[index].id
        };

        db.Blogs[index] = updatedBlogWithId;
        return updatedBlogWithId;
    }
}
