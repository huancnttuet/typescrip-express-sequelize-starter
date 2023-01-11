import { DataTypes } from 'sequelize';
import { User } from '@/common/interfaces/users.interface';
import { sequelize } from '@/databases';
import DefaultModel from '@/common/abstracts/model.abstract';

export class UserModel extends DefaultModel<User> implements User {
  public id: number;
  public name: string;
  public email: string;
  public password: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  getEmailById: (id: number) => Promise<any>;
}

export const Users = (): typeof UserModel => {
  UserModel.init(
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
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  UserModel.prototype.getEmailById = async function (id: number) {
    return await this.findByPk(id);
  };
  return UserModel;
};
