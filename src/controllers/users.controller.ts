import { Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@/common/interfaces/users.interface';
import handleError from '@/common/decorator/handleError.decorator';
import DefaultController from '@/common/abstracts/controller.abstract';
import UserService from '@services/users.service';

class UsersController extends DefaultController<User, CreateUserDto> {
  public service = new UserService();
  @handleError
  public searchUserByEmail = async (req: Request, res: Response) => {
    const search = req.query.search;
    let data: User[];
    if (!search) {
      data = await this.service.getAll();
    } else {
      data = await this.service.searchByEmail(search.toString());
    }
    res.status(200).json({ data: data, message: 'findOne' });
  };
}

export default UsersController;
