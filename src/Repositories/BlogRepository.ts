import {db} from "../db/db-blogs-and-posts";
import {BlogInputModel} from "../db/db-blogs-and-posts";
import {BlogModel} from "../db/db-blogs-and-posts";
import {ObjectId, WithId} from "mongodb";
import {blogsCollection} from "../db/mongo-db";

export const blogRepository = {
    async findAll(): Promise<WithId<BlogModel>[]> {
        return blogsCollection.find().toArray();
    },
    async findById(id: string): Promise<WithId<BlogModel> | null> {
        console.log(await blogsCollection.find().toArray());
        return blogsCollection.findOne({ _id: new ObjectId(id) });
},
    async delete(id: string): Promise<void> {
        const deleted = await blogsCollection.deleteOne({ _id: new ObjectId(id) });
        if (deleted.deletedCount < 1) {
            throw new Error(`Deleting blog with id ${id} not found.`);
        }
        return;
},
    async create(newBlog: BlogModel): Promise<WithId<BlogModel>> {
        const insert = await blogsCollection.insertOne(newBlog);
    return {...newBlog, _id: insert.insertedId };
},
    async update(id: string, updatedBlog: BlogInputModel): Promise<void> {
        // const index: number = db.Blogs.findIndex((blog: BlogModel) => blog.id === blog.id);
        //
        // if (index === -1) {
        //     throw new Error("Blog does not exist");
        // }

        const updatedBlogWithId = await blogsCollection.updateOne(
            { _id: new ObjectId(id)},
            {
            ...updatedBlog,
        });
        if (updatedBlogWithId.matchedCount < 1) {
            throw new Error("Blog does not exist");
        }
        return;
    }
};
