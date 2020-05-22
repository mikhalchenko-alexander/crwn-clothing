import { createSelector } from 'reselect';

const selectShoppingCartDropdown = state => state.shoppingCartDropdown;

export const selectShoppingCartDropdownHidden = createSelector(
  [selectShoppingCartDropdown],
  shoppingCartDropdown => shoppingCartDropdown.hidden
);
