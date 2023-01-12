import DefaultRoute from '@/common/abstracts/route.abstract';
import { CreateCategoryDto } from '@/dtos/category.dto';
import { Category } from '@/common/interfaces/product/category.interface';

class CategoryRoute extends DefaultRoute<Category, CreateCategoryDto> {
  initializeValue() {
    this.prefix_path = '/category';
    this.model_name = 'Categories';
    this.create_dto = CreateCategoryDto;
  }
}

export default CategoryRoute;
