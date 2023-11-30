import express from 'express';
import router from './config/router.js';
const app = express();
const port = 3001;

app.use(router);

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});