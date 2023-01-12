import IndexController from '@controllers/index.controller';
import { Router } from 'express';

class IndexRoute {
  public router: Router;
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }
  initializeRoutes() {
    const { index } = new IndexController();
    this.router.get('/', index);
  }
}

export default IndexRoute;
