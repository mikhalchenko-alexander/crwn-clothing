import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

export const shopDataReducer = (state = INITIAL_STATE, action) => state;
