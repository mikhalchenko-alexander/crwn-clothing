import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import shoppingCartDropdownReducer from './shopping-cart-dropdown/shopping-cart-dropdown-reducer';

export default combineReducers({
  user: userReducer,
  shoppingCartDropdown: shoppingCartDropdownReducer
});
