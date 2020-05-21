import { ShoppingCartDropdownActionTypes } from './shopping-cart-dropdown-action-types';

export const createToggleHiddenShoppingCartDropdownAction = () => ({
  type: ShoppingCartDropdownActionTypes.TOGGLE_HIDDEN
});

export const createAddItemShoppingCartDropdownAction = item => ({
  type: ShoppingCartDropdownActionTypes.ADD_ITEM,
  payload: item
});
