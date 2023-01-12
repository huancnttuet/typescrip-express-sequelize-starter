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

  public async getAll() {
    return await this.findAll();
  }

  public async getById(id: number) {
    return await this.findById(id);
  }

  public async get(data: any) {
    if (isEmpty(data)) throw new HttpException(400, `${this.modelName} data is empty`);
    return await this.findOne({ where: data });
  }

  public async create(data: any) {
    if (isEmpty(data)) throw new HttpException(400, `${this.modelName} data is empty`);
    return await this.createModel(data);
  }

  public async updateById(data: any, id: number) {
    if (isEmpty(data)) throw new HttpException(400, `${this.modelName} data is empty`);
    if (isEmpty(id)) throw new HttpException(400, `${this.modelName} id is empty`);
    // const find = await this.model.findOne(query);
    // if (!find) throw new HttpException(409, `${this.modelName} doesn't exist`);
    return await this.updateModel(data, { id: id });
  }

  public async deleteById(id: number) {
    return this.deleteModel({ id: id });
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
    return await this.model.findOne(query);
  }

  protected async createModel(data: any): Promise<any> {
    const createData = await this.model.create(data);
    return createData;
  }

  protected async updateModel(data: any, query: any): Promise<any> {
    const updateData = await this.model.update(data, { where: query });
    return updateData;
  }

  protected async deleteModel(query: any): Promise<any> {
    const find = await this.model.destroy({ where: query });
    return find;
  }
}
export default DefaultService;
