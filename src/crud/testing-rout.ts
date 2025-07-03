import {Router} from "express";
import {blogsCollection, postsCollection} from "../db/mongo-db";

export const testingRout = Router();

testingRout.delete("/testing/all-data", async (req, res) => {
    try {
        await Promise.all([
            blogsCollection.deleteMany({}),
            postsCollection.deleteMany({}),
        ])
        res.status(204).send();
        console.log("Successfully deleted data");
    } catch (err) {
        res.status(500).send(err);
        console.log("Error deleting data:", err);
    }
});