import { ShoppingCartDropdownActionTypes } from './shopping-cart-dropdown-action-types';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const shoppingCartDropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShoppingCartDropdownActionTypes.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ShoppingCartDropdownActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default shoppingCartDropdownReducer;
