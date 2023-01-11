import { Model, Optional } from 'sequelize';
class DefaultModel<U> extends Model<U, Optional<U, keyof U>> {}

export default DefaultModel;
