import DefaultRoute from '@/common/abstracts/route.abstract';
import { CreateProductDto } from '@/dtos/product.dto';
import ProductService from '@/services/product.service';
import { Product } from '@/common/interfaces/product/product.interface';

class ProductRoute extends DefaultRoute<Product, CreateProductDto> {
  initializeValue() {
    this.prefix_path = '/product';
    this.model_name = 'Products';
    this.create_dto = CreateProductDto;
  }

  initializeService(): void {
    this.service = new ProductService();
  }
}

export default ProductRoute;
