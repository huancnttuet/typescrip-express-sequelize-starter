import { Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@/common/interfaces/users.interface';
import { RequestWithUser } from '@/common/interfaces/auth.interface';
import AuthService from '@services/auth.service';
import handleError from '@/common/decorator/handleError.decorator';

class AuthController {
  public authService = new AuthService();
  @handleError
  public signUp = async (req: Request, res: Response) => {
    const userData: CreateUserDto = req.body;
    const signUpUserData: User = await this.authService.signup(userData);

    res.status(201).json({ data: signUpUserData, message: 'signup' });
  };

  @handleError
  public logIn = async (req: Request, res: Response) => {
    const userData: CreateUserDto = req.body;
    const { cookie, findUser } = await this.authService.login(userData);

    res.setHeader('Set-Cookie', [cookie]);
    res.status(200).json({ data: findUser, message: 'login' });
  };

  @handleError
  public logOut = async (req: RequestWithUser, res: Response) => {
    const userData: User = req.user;
    const logOutUserData: User = await this.authService.logout(userData);

    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    res.status(200).json({ data: logOutUserData, message: 'logout' });
  };
}

export default AuthController;
