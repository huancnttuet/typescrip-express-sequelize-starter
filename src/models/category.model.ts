import { DataTypes } from 'sequelize';

import { sequelize } from '@/databases';
import DefaultModel from '@/common/abstracts/model.abstract';
import { Category } from '@/common/interfaces/product/category.interface';

export class CategoryModel extends DefaultModel<Category> implements Category {
  id: number;
  name: string;
  code: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const Categories = (): typeof CategoryModel => {
  CategoryModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING(45),
      },
      code: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'categories',
      sequelize,
    },
  );

  return CategoryModel;
};
