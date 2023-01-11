import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';

const routes = [new AuthRoute(), new IndexRoute(), new UsersRoute()];

export default routes;
