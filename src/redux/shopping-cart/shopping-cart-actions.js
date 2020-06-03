import { ShoppingCartActionTypes } from './shopping-cart-action-types';

export const createAddItemToShoppingCartAction = item => ({
  type: ShoppingCartActionTypes.ADD_ITEM,
  payload: item
});

export const createRemoveItemToShoppingCartAction = itemId => ({
  type: ShoppingCartActionTypes.REMOVE_ITEM,
  payload: itemId
});

export const createClearItemFromShoppingCartAction = itemId => ({
  type: ShoppingCartActionTypes.CLEAR_ITEM,
  payload: itemId
});
