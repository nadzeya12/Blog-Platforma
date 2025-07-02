import {db} from "../db/db-blogs-and-posts";
import {BlogInputModel} from "../db/db-blogs-and-posts";
import {BlogViewModel} from "../db/db-blogs-and-posts";
import {ObjectId, WithId} from "mongodb";
import {blogsCollection} from "../db/mongo-db";

export const blogRepository = {
    async findAll(): Promise<WithId<BlogViewModel>[]> {
        return blogsCollection.find().toArray();
    },
    async findById(id: string): Promise<WithId<BlogViewModel> | null> {
        return blogsCollection.findOne({ _id: new ObjectId(id) });
},
    async delete(id: string): Promise<void> {
        const deleted = await blogsCollection.deleteOne({ _id: new ObjectId(id) });
        if (deleted.deletedCount < 1) {
            throw new Error(`Deleting blog with id ${id} not found.`);
        }
        return;
},
    async create(newBlogView: BlogViewModel): Promise<WithId<BlogViewModel>> {
        const insert = await blogsCollection.insertOne(newBlogView);
    return {...newBlogView, _id: insert.insertedId };
},
    async update(id: string, updatedBlog: BlogInputModel): Promise<void> {
        const index: number = db.Blogs.findIndex((blog: BlogViewModel) => blog.id === blog.id);

        if (index === -1) {
            throw new Error("Blog does not exist");
        }

        const updatedBlogWithId = await blogsCollection.updateOne(
            { _id: new ObjectId(id)},
            {
            ...updatedBlog,
            createdAt: db.Blogs[index].createdAt,
            isMembership: db.Blogs[index].isMembership
        });
        if (updatedBlogWithId.matchedCount < 1) {
            throw new Error("Blog does not exist");
        }
        return;
    }
};
