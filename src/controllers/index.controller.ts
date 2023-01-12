import handleError from '@/common/decorator/handleError.decorator';
import { Request, Response } from 'express';

class IndexController {
  @handleError
  public index = (req: Request, res: Response) => {
    res.sendStatus(200);
  };
}

export default IndexController;
