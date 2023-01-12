import { CreatePriceDto } from '@/dtos/price.dto';
import { Price } from '@/common/interfaces/product/price.interface';
import DefaultController from '@/common/abstracts/controller.abstract';

class PriceController extends DefaultController<Price, CreatePriceDto> {}

export default PriceController;
