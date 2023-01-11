import DefaultController from '@/common/abstracts/controller.abstract';
import controller from '@/common/decorator/controller';
import { Request, Response } from 'express';

class IndexController extends DefaultController {
  @controller
  public index = (req: Request, res: Response) => {
    res.sendStatus(200);
  };
}

export default IndexController;
