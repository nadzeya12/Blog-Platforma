import {Router} from "express";
import {blogsCollection, postsCollection} from "../db/mongo-db";

export const testingRout = Router();

testingRout.delete("/testing/all-data", async (req, res) => {
    await Promise.all([
            blogsCollection.deleteMany(),
            postsCollection.deleteMany(),
        ]
    )
    res.status(204);
});