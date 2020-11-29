import { addCartItem, clearCartItem, removeCartItem } from './shopping-cart-utils';
import { ShoppingCartActionTypes } from './shopping-cart-action-types';

const INITIAL_STATE = {
  cartItems: []
};

const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShoppingCartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload)
      };
    case ShoppingCartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload)
      };
    case ShoppingCartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, action.payload)
      };

    case ShoppingCartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
