import { DataTypes } from 'sequelize';

import { sequelize } from '@/databases';
import DefaultModel from '@/common/abstracts/model.abstract';
import { Price } from '@/common/interfaces/product/price.interface';
import { CurrencyModel } from './currency.model';
import { ProductModel } from './product.model';

export class PriceModel extends DefaultModel<Price> implements Price {
  id: number;
  origin_price: string;
  price: string;
  discount: string;
  currency_id: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const Prices = (): typeof PriceModel => {
  PriceModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      origin_price: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      discount: {
        allowNull: true,
        type: DataTypes.STRING(30),
      },
      currency_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'prices',
      sequelize,
    },
  );

  PriceModel.belongsTo(CurrencyModel, {
    foreignKey: 'currency_id',
  });

  return PriceModel;
};
