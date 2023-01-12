import { DataTypes } from 'sequelize';

import { sequelize } from '@/databases';
import DefaultModel from '@/common/abstracts/model.abstract';
import { Currency } from '@/common/interfaces/product/currency.interface';

export class CurrencyModel extends DefaultModel<Currency> implements Currency {
  id: number;
  name: string;
  symbol: string;
  rate: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const Currencies = (): typeof CurrencyModel => {
  CurrencyModel.init(
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
      symbol: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      rate: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
    },
    {
      tableName: 'currencies',
      sequelize,
    },
  );

  return CurrencyModel;
};
