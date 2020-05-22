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
