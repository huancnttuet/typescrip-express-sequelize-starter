import { hash } from 'bcrypt';

import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@/common/interfaces/users.interface';
import { isEmpty } from '@utils/util';
import DefaultService from '@/common/abstracts/service.abstract';
import DB from '@/databases';
import { Op } from 'sequelize';

class UserService extends DefaultService<User> {
  constructor() {
    super('Users');
  }

  public users = DB.Users;

  public async create(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');
    const findUser: User = await this.get({ email: userData.email });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });
    return createUserData;
  }

  public async updateById(data: any, id: number): Promise<User> {
    if (isEmpty(data)) throw new HttpException(400, 'userData is empty');

    await this.getById(id);

    const hashedPassword = await hash(data.password, 10);
    await this.users.update({ ...data, password: hashedPassword }, { where: { id: id } });
    const updateUser: User = await this.getById(id);
    return updateUser;
  }

  public async searchByEmail(search: string) {
    const _users: User[] = await this.users.findAll({
      where: {
        email: {
          [Op.like]: `%${search}%`,
        },
      },
    });
    return _users;
  }
}

export default UserService;
