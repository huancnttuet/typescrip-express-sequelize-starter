import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import DefaultRoute from '@/common/abstracts/route.abstract';

class AuthRoute extends DefaultRoute {
  initializeRoutes() {
    const { logIn, logOut, signUp } = new AuthController();
    this.router.post('/signup', validationMiddleware(CreateUserDto, 'body'), signUp);
    this.router.post('/login', validationMiddleware(CreateUserDto, 'body'), logIn);
    this.router.post('/logout', authMiddleware, logOut);
  }
}

export default AuthRoute;
