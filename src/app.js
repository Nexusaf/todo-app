import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/todoRoutes.js';

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

export default app;