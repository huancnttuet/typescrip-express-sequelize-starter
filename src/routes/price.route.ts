import DefaultRoute from '@/common/abstracts/route.abstract';
import { CreatePriceDto } from '@/dtos/price.dto';
import { Price } from '@/common/interfaces/product/price.interface';
import PriceService from '@/services/price.service';

class PriceRoute extends DefaultRoute<Price, CreatePriceDto> {
  initializeValue() {
    this.prefix_path = '/price';
    this.model_name = 'Prices';
    this.create_dto = CreatePriceDto;
  }

  initializeService(): void {
    this.service = new PriceService();
  }
}

export default PriceRoute;
