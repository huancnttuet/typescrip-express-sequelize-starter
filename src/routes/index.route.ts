import IndexController from '@controllers/index.controller';
import DefaultRoute from '@/common/abstracts/route.abstract';

class IndexRoute extends DefaultRoute {
  initializeRoutes() {
    const { index } = new IndexController();
    this.router.get('/', index);
  }
}

export default IndexRoute;
