import express, { Express } from 'express';
import {blogsRouter} from "./crud/blogsRouter";
import {testingRout} from "./crud/testing-rout";
import {postsRouter} from "./crud/postsRouter";

export const setupApp = (app: Express) => {
     app.use(express.json()); //middleware express.json() парсит JSON в теле запроса и добавляет его как объект в свойство body запроса (req.body.).

   app.get('/', (req, res) => {
       res.send('Hello World').status(200);
   });

   app.use(blogsRouter);
   app.use(postsRouter);
   app.use(testingRout);

    return app;
};
