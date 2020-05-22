import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import shoppingCartDropdownReducer from './shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-reducer';
import shoppingCartReducer from './shopping-cart/shopping-cart-reducer';

export default combineReducers({
  user: userReducer,
  shoppingCartDropdown: shoppingCartDropdownReducer,
  shoppingCart: shoppingCartReducer
});
