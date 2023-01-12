import { Users } from '@models/users.model';
import { Categories } from './category.model';
import { Currencies } from './currency.model';
import { Prices } from './price.model';
import { Products } from './product.model';

export const init = () => ({
  Users: Users(),
  Currencies: Currencies(),
  Categories: Categories(),
  Prices: Prices(),
  Products: Products(),
});
