import express from 'express';
import 'express-async-errors';
import { json, urlencoded } from 'body-parser';
import cookieSession from 'cookie-session';
import swaggerUi from 'swagger-ui-express';

//consegui fazer o commit!

import errorHandler from './middlewares/error-handler';
import signupRouter from './components/authentication/router/signup-router';
import currentUserRouter from './components/authentication/router/current-user-router';
import signinRouter from './components/authentication/router/signin-router';
import signoutRouter from './components/authentication/router/signout-router';
import NotFoundError from './errors/not-found-error';
import swaggerDocument from './swagger/swagger.json';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.set('trust proxy', true);
    this.server.use(json());
    this.server.use(urlencoded({ extended: false }));
    this.server.use(
      cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test',
      })
    );
  }

  routes() {
    this.server.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
    this.server.use(currentUserRouter);
    this.server.use(signinRouter);
    this.server.use(signoutRouter);
    this.server.use(signupRouter);
    this.server.all('*', async () => {
      throw new NotFoundError();
    });
    this.server.use(errorHandler);
  }
}

export default new App().server;
