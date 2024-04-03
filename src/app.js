/**
 * Configures Express app with middleware and routes.
 */

import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/todoRoutes.js';
import path from 'path';
import morgan from'morgan';

let pathToViews = path.join(path.resolve(), 'views');

const app = express();

app.set('views', pathToViews);
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.static('public', { maxAge: '1d' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

export default app;