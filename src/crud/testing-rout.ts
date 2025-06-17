import {Router} from "express";
import {db} from "../db/db-blogs-and-posts";

export const testingRout = Router();

testingRout.delete("/testing-data", (req, res) => {
    db.Blogs = [];
    db.Posts = [];
    res.send("All data deleted").status(204);
});