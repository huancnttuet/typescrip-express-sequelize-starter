import { CreateCategoryDto } from '@/dtos/category.dto';
import { Category } from '@/common/interfaces/product/category.interface';
import DefaultController from '@/common/abstracts/controller.abstract';

class CategoryController extends DefaultController<Category, CreateCategoryDto> {}

export default CategoryController;
