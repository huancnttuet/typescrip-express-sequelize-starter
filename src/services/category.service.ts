import DefaultService from '@/common/abstracts/service.abstract';
import { Category } from '@/common/interfaces/product/category.interface';

class CategoryService extends DefaultService<Category> {
  constructor() {
    super('Categories');
  }
}

export default CategoryService;
