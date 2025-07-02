import {db, PostInputModel, PostViewModel} from "../db/db-blogs-and-posts";
import {WithId} from "mongodb";
import {postsCollection} from "../db/mongo-db";

export const postsRepository = {
    async findAll(): Promise<WithId<PostViewModel>[]> {
        return postsCollection.find().toArray();
    },
    async findById(id: string): Promise<WithId<PostViewModel> | null> {
        return postsCollection.findOne({ _id: new Object(id) });
    },
    async create(createdPost: PostViewModel): Promise<WithId<PostViewModel>> {
        const insert = await postsCollection.insertOne(createdPost);
        return {...createdPost, _id: insert.insertedId};
    },
    async update (id: string, updatedPost: PostInputModel): Promise<void> {
        const index: number = db.Posts.findIndex((post: PostViewModel) => post.id === post.id);

        if (index === -1) {
            throw new Error("Post does not exist");
        }
        const updatedPostWithId = await postsCollection.updateOne(
            {_id: new Object(id)},
            {
                ...updatedPost,
                id: db.Posts[index].id,
                blogName: db.Posts[index].blogName,
                createdAt: db.Posts[index].createdAt

        });
        if(updatedPostWithId.matchedCount < 1){
            throw new Error("Post does not exist");
        }
        return;
    },
    async delete(id: string): Promise<void> {
        const deleted = await postsCollection.deleteOne( {_id: new Object(id)} );
        if (deleted.deletedCount < 1) {
            throw new Error("Blog does not exist");
        }
        return;
    },
}