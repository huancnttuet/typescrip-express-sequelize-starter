import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';

abstract class DefaultRoute implements Routes {
  router: Router;
  prefix_path: string;

  constructor() {
    this.router = Router();
    this.setPrefixPath();
    this.initializeRoutes();
    this.finallyRoutes();
  }

  abstract initializeRoutes();
  setPrefixPath() {
    this.prefix_path = '';
  }
  finallyRoutes() {
    this.router = Router().use(this.prefix_path, this.router);
  }
}

export default DefaultRoute;
