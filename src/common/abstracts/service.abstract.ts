import DB from '@/databases';
import { HttpException } from '@/exceptions/HttpException';
import { isEmpty } from 'class-validator';
import DefaultModel from './model.abstract';

class DefaultService<U> {
  protected model: typeof DefaultModel<U>;
  private modelName: string;
  constructor(modelName: string) {
    this.model = DB[modelName];
    this.modelName = modelName;
  }

  protected async findAll(): Promise<any[]> {
    const allUser = await this.model.findAll();
    return allUser;
  }

  protected async findById(id: number): Promise<any> {
    if (isEmpty(id)) throw new HttpException(400, `${this.modelName}Id is empty`);

    const find = await this.model.findByPk(id);
    if (!find) throw new HttpException(409, `${this.modelName} doesn't exist`);

    return find;
  }

  protected async findOne(query: Object): Promise<any> {
    if (isEmpty(query)) throw new HttpException(400, `${this.modelName}Data is empty`);
    const find = await this.model.findOne(query);
    return find;
  }

  protected async create(data: any): Promise<any> {
    const createData = await this.model.create(data);
    return createData;
  }

  protected async update(data: any, query: any): Promise<any> {
    const updateData = await this.model.update(data, { where: query });
    return updateData;
  }

  protected async delete(query: any): Promise<any> {
    const find = await this.model.destroy({ where: query });
    return find;
  }
}
export default DefaultService;
