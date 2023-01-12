import { CreateUserDto } from '@dtos/users.dto';
import DefaultRoute from '@/common/abstracts/route.abstract';
import { User } from '@/common/interfaces/users.interface';
import UserService from '@/services/users.service';
import UsersController from '@/controllers/users.controller';
import validationMiddleware from '@/middlewares/validation.middleware';

class UsersRoute extends DefaultRoute<User, CreateUserDto> {
  initializeValue() {
    this.prefix_path = '/users';
    this.model_name = 'Users';
    this.create_dto = CreateUserDto;
  }
  initializeService(): void {
    this.service = new UserService();
  }
  initializeRoutes(): void {
    this.router.get('/:id(\\d+)', this.controller.getByIdController);
    this.router.post('', validationMiddleware(this.create_dto, 'body'), this.controller.createController);
    this.router.put('/:id(\\d+)', validationMiddleware(this.create_dto, 'body', true), this.controller.updateController);
    this.router.delete('/:id(\\d+)', this.controller.deleteController);
  }
  addRoutes(): void {
    const { searchUserByEmail } = new UsersController(this.service);
    this.router.get('', searchUserByEmail);
  }
}

export default UsersRoute;
