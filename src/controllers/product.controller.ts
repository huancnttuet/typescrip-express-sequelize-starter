import { CreateProductDto } from '@/dtos/product.dto';
import { Product } from '@/common/interfaces/product/product.interface';
import DefaultController from '@/common/abstracts/controller.abstract';

class ProductController extends DefaultController<Product, CreateProductDto> {}

export default ProductController;
