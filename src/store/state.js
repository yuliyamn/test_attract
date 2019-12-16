import data from './data/data';
import city from './data/city';
import category from './data/category';

export const state = {
  data,
  city,
  category,
  filter: {
    categoriesSelected: [],
    citySelected: null,
    priceFrom: null,
    priceTo: null,
  }
};

export default 'state';
