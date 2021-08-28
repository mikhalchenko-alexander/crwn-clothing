import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingCartItems, selectShoppingCartTotal } from '../../redux/shopping-cart/shopping-cart-selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeCheckoutPopup from '../../components/StripeCheckout/StripeCheckoutPopup/StripeCheckoutPopup.component';
import { selectStripeCheckoutPopupHidden } from '../../redux/stripe-checkout/stripe-checkout-selectors';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../stripe/stripe-utils';
import { createShowCheckoutPopup } from '../../redux/stripe-checkout/stripe-checkout-actions';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  StripeCheckoutButtonContainer,
  TotalContainer
} from './CheckoutPage.styles';

const CheckoutPage = () => {
  const shoppingCartItems = useSelector(selectShoppingCartItems);
  const shoppingCartTotal = useSelector(selectShoppingCartTotal);
  const stripeCheckoutPopupHidden = useSelector(selectStripeCheckoutPopupHidden);
  const dispatch = useDispatch();

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>Product</HeaderBlockContainer>
        <HeaderBlockContainer>Description</HeaderBlockContainer>
        <HeaderBlockContainer>Quantity</HeaderBlockContainer>
        <HeaderBlockContainer>Price</HeaderBlockContainer>
        <HeaderBlockContainer>Remove</HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {
        shoppingCartItems.map(cartItem => <CheckoutItem key={ cartItem.id } item={ cartItem } />)
      }

      <TotalContainer>
        <span>${ shoppingCartTotal }</span>
      </TotalContainer>

      <StripeCheckoutButtonContainer onClick={ () => dispatch(createShowCheckoutPopup()) }>
        BUY NOW
      </StripeCheckoutButtonContainer>

      {
        stripeCheckoutPopupHidden ?
          null :
          <Elements stripe={ stripePromise }>
            <StripeCheckoutPopup />
          </Elements>
      }
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
