import DefaultService from '@/common/abstracts/service.abstract';
import { Product } from '@/common/interfaces/product/product.interface';
import { PriceModel } from '@/models/price.model';
import { CurrencyModel } from '@/models/currency.model';

class ProductService extends DefaultService<Product> {
  constructor() {
    super('Products');
  }

  public async getAllProduct() {
    const all = await this.model.findAll({
      include: [
        {
          model: PriceModel,
          include: [
            {
              model: CurrencyModel,
            },
          ],
        },
      ],
    });
    return all;
  }
}

export default ProductService;
