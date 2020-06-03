import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import shoppingCartDropdownReducer from './shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-reducer';
import shoppingCartReducer from './shopping-cart/shopping-cart-reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['shoppingCart']
};

const rootReducer = combineReducers({
  user: userReducer,
  shoppingCartDropdown: shoppingCartDropdownReducer,
  shoppingCart: shoppingCartReducer
});

export default persistReducer(persistConfig, rootReducer);
