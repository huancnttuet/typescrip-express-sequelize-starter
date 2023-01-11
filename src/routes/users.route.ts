import UsersController from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import validationMiddleware from '@middlewares/validation.middleware';
import DefaultRoute from '@/common/abstracts/route.abstract';

class UsersRoute extends DefaultRoute {
  setPrefixPath() {
    this.prefix_path = '/users';
  }

  initializeRoutes() {
    const { getUsers, getUserById, createUser, updateUser, deleteUser, getEmail } = new UsersController();
    this.router.get('', getUsers);
    this.router.get('/:id(\\d+)', getUserById);
    this.router.post('', validationMiddleware(CreateUserDto, 'body'), createUser);
    this.router.put('/:id(\\d+)', validationMiddleware(CreateUserDto, 'body', true), updateUser);
    this.router.delete('/:id(\\d+)', deleteUser);
    this.router.get('/email/:id(\\d+)', getEmail);
  }
}

export default UsersRoute;
