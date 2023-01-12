import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import DefaultController from './controller.abstract';
import DefaultService from './service.abstract';

abstract class DefaultRoute<Data, CreateDataDto> implements Routes {
  router: Router;
  prefix_path: string;
  model_name: string;
  create_dto: any;
  service: DefaultService<Data>;
  controller: DefaultController<Data, CreateDataDto>;
  constructor() {
    this.router = Router();
    this.initializeValue();
    this.initializeService();
    this.initializeController();
    this.initializeRoutes();
    this.addRoutes();
    this.finallyRoutes();
  }

  abstract initializeValue();

  initializeService() {
    this.service = new DefaultService<Data>(this.model_name);
  }

  initializeController() {
    this.controller = new DefaultController<Data, CreateDataDto>(this.service);
  }
  initializeRoutes() {
    this.router.get('', this.controller.getAllController);
    this.router.get('/:id(\\d+)', this.controller.getByIdController);
    this.router.post('', validationMiddleware(this.create_dto, 'body'), this.controller.createController);
    this.router.put('/:id(\\d+)', validationMiddleware(this.create_dto, 'body', true), this.controller.updateController);
    this.router.delete('/:id(\\d+)', this.controller.deleteController);
  }

  addRoutes() {
    //add routes
  }

  finallyRoutes() {
    this.router = Router().use(this.prefix_path || '', this.router);
  }
}

export default DefaultRoute;
