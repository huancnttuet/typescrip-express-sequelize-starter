import { Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@/common/interfaces/users.interface';
import userService from '@services/users.service';
import controller from '@/common/decorator/controller';

class UsersController {
  public userService = new userService();

  @controller
  public getUsers = async (req: Request, res: Response) => {
    const findAllUsersData: User[] = await this.userService.getAllUser();
    res.status(200).json({ data: findAllUsersData, message: 'findAll' });
  };

  @controller
  public getUserById = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const findOneUserData: User = await this.userService.getUserById(userId);
    res.status(200).json({ data: findOneUserData, message: 'findOne' });
  };

  @controller
  public createUser = async (req: Request, res: Response) => {
    const userData: CreateUserDto = req.body;
    const createUserData: User = await this.userService.createUser(userData);

    res.status(201).json({ data: createUserData, message: 'created' });
  };

  @controller
  public updateUser = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const userData: CreateUserDto = req.body;
    const updateUserData: User = await this.userService.updateUser(userId, userData);

    res.status(200).json({ data: updateUserData, message: 'updated' });
  };

  @controller
  public deleteUser = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const deleteUserData: User = await this.userService.deleteUser(userId);

    res.status(200).json({ data: deleteUserData, message: 'deleted' });
  };

  @controller
  public getEmail = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const email = await this.userService.getEmailById(userId);
    res.status(200).json({ data: email, message: 'email' });
  };
}

export default UsersController;
