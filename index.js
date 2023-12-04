import express from 'express';
import router from './config/router.js';
import { connectDb } from './db/helpers.js';
const app = express();
const port = 3001;

app.use(express.json());
app.use(router);

async function startServer() {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`Application listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.log('Something went wrong connecting to the database', err);
  }
}

startServer();
