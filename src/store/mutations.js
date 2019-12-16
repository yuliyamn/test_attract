import _ from 'lodash';

export const UPDATE_CATEGORIES_SELECTED = (State, value) => {
  State.filter.categoriesSelected = value;
};

export const UPDATE_CITY_SELECTED = (State, value) => {
  State.filter.citySelected = value;
};

export const UPDATE_PRICE_SELECTED = (State, value) => {
  State.filter.priceFrom = value[0];
  State.filter.priceTo = value[1];
};
