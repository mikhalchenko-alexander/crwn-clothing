import { ShoppingCartDropdownActionTypes } from './shopping-cart-dropdown-action-types';

const INITIAL_STATE = {
  hidden: true
};

const shoppingCartDropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShoppingCartDropdownActionTypes.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default shoppingCartDropdownReducer;
