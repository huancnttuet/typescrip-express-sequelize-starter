import { NextFunction, Request, Response } from 'express';

type DefaulFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;
type OriginFunction = (req: Request, res: Response) => Promise<void>;

const inject = (run: OriginFunction) => {
  const _function: DefaulFunction = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await run(req, res);
    } catch (error) {
      next(error);
    }
  };
  return _function;
};

const controller = (target: Object, propertyKey: string) => {
  let currentValue = target[propertyKey];
  Object.defineProperty(target, propertyKey, {
    set: (newValue: any) => {
      currentValue = inject(newValue);
    },
    get: () => currentValue,
  });
};

export default controller;
