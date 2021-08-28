import React from 'react';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingCartItems } from '../../../redux/shopping-cart/shopping-cart-selectors';
import { withRouter } from 'react-router-dom';
import { createToggleHiddenShoppingCartDropdownAction } from '../../../redux/shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-actions';
import {
  CartItemsContainer,
  CheckoutButtonContainer,
  EmptyMessageContainer,
  ShoppingCartDropdownContainer
} from './ShoppingCartDropdown.styles';

const ShoppingCartDropdown = ({ history }) => {

  const dispatch = useDispatch();

  const handleGoToCheckout = () => {
    dispatch(createToggleHiddenShoppingCartDropdownAction());
    history.push('/checkout');
  };

  const shoppingCartItems = useSelector(selectShoppingCartItems);

  return (
    <ShoppingCartDropdownContainer>
      <CartItemsContainer>
        {
          shoppingCartItems.length ?
            shoppingCartItems.map(item => <ShoppingCartItem key={ item.id } item={ item } />) :
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        }
      </CartItemsContainer>
      <CheckoutButtonContainer onClick={ () => handleGoToCheckout() }>GO TO CHECKOUT</CheckoutButtonContainer>
    </ShoppingCartDropdownContainer>
  );
};

export default withRouter(ShoppingCartDropdown);
