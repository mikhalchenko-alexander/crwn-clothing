import React from 'react';
import { createToggleHiddenShoppingCartDropdownAction } from '../../redux/shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingCartItemsCount } from '../../redux/shopping-cart/shopping-cart-selectors';
import { ItemCountContainer, ShoppingBagIconContainer, ShoppingCartIconContainer } from './ShoppingCartIcon.styles';

const ShoppingCartIcon = () => {
  const itemCount = useSelector(selectShoppingCartItemsCount);
  const dispatch = useDispatch();

  return (
    <ShoppingCartIconContainer onClick={ () => dispatch(createToggleHiddenShoppingCartDropdownAction()) }>
      <ShoppingBagIconContainer />
      <ItemCountContainer>{ itemCount }</ItemCountContainer>
    </ShoppingCartIconContainer>
  );
};

export default ShoppingCartIcon;
