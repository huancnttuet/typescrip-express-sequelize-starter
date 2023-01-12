import DefaultRoute from '@/common/abstracts/route.abstract';
import { CreateCurrencyDto } from '@/dtos/currency.dto';
import { Currency } from '@/common/interfaces/product/currency.interface';

class CurrencyRoute extends DefaultRoute<Currency, CreateCurrencyDto> {
  initializeValue() {
    this.prefix_path = '/currency';
    this.model_name = 'Currencies';
    this.create_dto = CreateCurrencyDto;
  }
}

export default CurrencyRoute;
