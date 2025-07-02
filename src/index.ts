import { setupApp } from './setup-app';
import express from 'express';
import {run} from "./db/mongo-db";
import {SETTINGS} from "./db/mongo-settings";

const bootstrap = async () => {
  /*export */ const app = express();
  setupApp(app);

  const port = 5000;

  await run(SETTINGS.uri);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  return app;
};

bootstrap();



