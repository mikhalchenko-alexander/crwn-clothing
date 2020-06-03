import { ShoppingCartActionTypes } from './shopping-cart-action-types';

export const createAddItemToShoppingCartAction = item => ({
  type: ShoppingCartActionTypes.ADD_ITEM,
  payload: item
});

export const createClearItemFromShoppingCartAction = itemId => ({
  type: ShoppingCartActionTypes.CLEAR_ITEM,
  payload: itemId
});
