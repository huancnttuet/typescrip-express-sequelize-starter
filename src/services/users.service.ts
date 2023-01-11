import { hash } from 'bcrypt';

import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@/common/interfaces/users.interface';
import { isEmpty } from '@utils/util';
import DefaultService from '@/common/abstracts/service.abstract';
import DB from '@/databases';

class UserService extends DefaultService<User> {
  constructor() {
    super('Users');
  }
  public users = DB.Users;
  public async getUserById(id: number) {
    return await this.findById(id);
  }

  public async getEmailById(id: number) {
    return await this.users.findAll();
  }

  public async getAllUser() {
    return await this.findAll();
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');
    const findUser: User = await this.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await this.create({ ...userData, password: hashedPassword });
    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    await this.findById(userId);

    const hashedPassword = await hash(userData.password, 10);
    await this.update({ ...userData, password: hashedPassword }, { id: userId });

    const updateUser: User = await this.findById(userId);
    return updateUser;
  }

  public async deleteUser(id: number) {
    return await this.delete({ id: id });
  }
}

export default UserService;
