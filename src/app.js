import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/todoRoutes.js';
import path from 'path';

let pathToViews = path.join(path.resolve(), 'views');

const app = express();

app.set('views', pathToViews);
app.set('view engine', 'pug');

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

export default app;