import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import CategoryRoute from './category.route';
import CurrencyRoute from './currency.route';
import PriceRoute from './price.route';
import ProductRoute from './product.route';

const routes = [new AuthRoute(), new IndexRoute(), new UsersRoute(), new ProductRoute(), new PriceRoute(), new CurrencyRoute(), new CategoryRoute()];

export default routes;
