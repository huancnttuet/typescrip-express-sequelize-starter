import DefaultController from '@/common/abstracts/controller.abstract';
import { Currency } from '@/common/interfaces/product/currency.interface';
import { CreateCurrencyDto } from '@/dtos/currency.dto';

class CurrencyController extends DefaultController<Currency, CreateCurrencyDto> {}

export default CurrencyController;
