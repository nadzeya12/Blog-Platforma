import {PostInputModel, PostModel} from "../db/db-blogs-and-posts";
import {ObjectId, WithId} from "mongodb";
import {postsCollection} from "../db/mongo-db";

export const postsRepository = {
    async findAll(): Promise<WithId<PostModel>[]> {
        return postsCollection.find().toArray();
    },
    async findById(id: string): Promise<WithId<PostModel> | null> {
        console.log(await postsCollection.find().toArray());
        return postsCollection.findOne({ _id: new ObjectId(id) });
    },
    async create(createdPost: PostModel): Promise<WithId<PostModel>> {
        const insert = await postsCollection.insertOne(createdPost);
        return {...createdPost, _id: insert.insertedId};
    },
    async update (id: string, updatedPost: PostInputModel): Promise<void> {
        const updatedPostWithId = await postsCollection.updateOne(
            {_id: new ObjectId(id)},
            {
                $set: updatedPost,
        });
        if(updatedPostWithId.matchedCount < 1){
            throw new Error("Post does not exist");
        }
        return;
    },
    async delete(id: string): Promise<void> {
        const deleted = await postsCollection.deleteOne( {_id: new ObjectId(id)} );
        if (deleted.deletedCount < 1) {
            throw new Error(`Deleting post with id ${id} not found.`);
        }
        return;
    },
}