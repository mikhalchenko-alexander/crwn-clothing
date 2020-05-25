import { createSelector } from 'reselect';

const selectShoppingCart = state => state.shoppingCart;

export const selectShoppingCartItems = createSelector(
  [selectShoppingCart],
  shoppingCart => shoppingCart.cartItems
);

export const selectShoppingCartItemsCount = createSelector(
  [selectShoppingCartItems],
  cartItems => cartItems.reduce((count, item) => count + item.quantity, 0)
);

export const selectShoppingCartTotal = createSelector(
  [selectShoppingCartItems],
  cartItems => cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
