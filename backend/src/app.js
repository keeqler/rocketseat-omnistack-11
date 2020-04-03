import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';

class App {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
    this.app.use(errors());
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
