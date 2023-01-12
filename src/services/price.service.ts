import DefaultService from '@/common/abstracts/service.abstract';
import { Price } from '@/common/interfaces/product/price.interface';
import DB from '@/databases';
import { CreatePriceDto } from '@/dtos/price.dto';

class PriceService extends DefaultService<Price> {
  constructor() {
    super('Prices');
  }

  public prices = DB.Prices;

  public async createService(data: CreatePriceDto): Promise<Price> {
    const newData = { ...data, origin_price: data.origin_price ? data.origin_price : data.price };
    const createData: Price = await this.prices.create({ ...newData });
    return createData;
  }
}

export default PriceService;
