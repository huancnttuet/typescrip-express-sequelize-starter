import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import IndexRoute from './index.route';

class AuthRoute extends IndexRoute {
  initializeRoutes() {
    const { logIn, logOut, signUp } = new AuthController();
    this.router.post('/signup', validationMiddleware(CreateUserDto, 'body'), signUp);
    this.router.post('/login', validationMiddleware(CreateUserDto, 'body'), logIn);
    this.router.post('/logout', authMiddleware, logOut);
  }
}

export default AuthRoute;
