import DefaultService from '@/common/abstracts/service.abstract';
import { Currency } from '@/common/interfaces/product/currency.interface';

class CurrencyService extends DefaultService<Currency> {
  constructor() {
    super('Currencies');
  }
}

export default CurrencyService;
