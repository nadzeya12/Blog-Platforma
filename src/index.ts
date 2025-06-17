import { setupApp } from './setup-app';
import express from 'express';

const app = express();
setupApp(app);

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

