import { Request, Response } from 'express';
import handleError from '@/common/decorator/handleError.decorator';
import DefaultService from './service.abstract';

class DefaultController<Data, CreateDto> {
  public service: DefaultService<Data>;

  constructor(service) {
    this.service = service;
  }

  @handleError
  public getAllController = async (req: Request, res: Response) => {
    const findAllData: Data[] = await this.service.getAll();
    res.status(200).json({ data: findAllData, message: 'findAll' });
  };

  @handleError
  public getByIdController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const findOneData: Data = await this.service.getById(id);
    res.status(200).json({ data: findOneData, message: 'findOne' });
  };

  @handleError
  public createController = async (req: Request, res: Response) => {
    const data: CreateDto = req.body;

    const createData: Data = await this.service.create(data);

    res.status(201).json({ data: createData, message: 'created' });
  };

  @handleError
  public updateController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data: CreateDto = req.body;
    const updateData: Data = await this.service.updateById(data, id);

    res.status(200).json({ data: updateData, message: 'updated' });
  };

  @handleError
  public deleteController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deleteData: Data = await this.service.deleteById(id);

    res.status(200).json({ data: deleteData, message: 'deleted' });
  };
}

export default DefaultController;
