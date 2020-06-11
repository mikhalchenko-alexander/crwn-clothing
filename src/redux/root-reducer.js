import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import shoppingCartDropdownReducer from './shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-reducer';
import shoppingCartReducer from './shopping-cart/shopping-cart-reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { directoryReducer } from './directory/directory-reducer';
import { shopDataReducer } from './shop/shop-reducer';
import { stripeCheckoutReducer } from './stripe-checkout/stripe-checkout-reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['shoppingCart']
};

const rootReducer = combineReducers({
  user: userReducer,
  shoppingCartDropdown: shoppingCartDropdownReducer,
  shoppingCart: shoppingCartReducer,
  directory: directoryReducer,
  shopData: shopDataReducer,
  stripeCheckout: stripeCheckoutReducer
});

export default persistReducer(persistConfig, rootReducer);
