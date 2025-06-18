import {Router} from "express";
import {db} from "../db/db-blogs-and-posts";

export const testingRout = Router();

testingRout.delete("/testing/all-data", (req, res) => {
    db.Blogs = [];
    db.Posts = [];
    res.status(204).send('');
    return;
});