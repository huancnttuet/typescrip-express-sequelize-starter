import { DataTypes } from 'sequelize';

import { sequelize } from '@/databases';
import DefaultModel from '@/common/abstracts/model.abstract';
import { Product } from '@/common/interfaces/product/product.interface';
import { CategoryModel } from './category.model';
import { PriceModel } from './price.model';

export class ProductModel extends DefaultModel<Product> implements Product {
  id: number;
  name: string;
  price_id: number;
  quantity: number;
  description: string;
  category_id: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const Products = (): typeof ProductModel => {
  ProductModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      price_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'products',
      sequelize,
    },
  );

  ProductModel.belongsTo(CategoryModel, {
    foreignKey: 'category_id',
  });

  ProductModel.belongsTo(PriceModel, { foreignKey: 'price_id' });

  return ProductModel;
};
