import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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

const CheckoutPage = ({ shoppingCartItems, shoppingCartTotal, stripeCheckoutPopupHidden, showStripeCheckoutPopup }) => {
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

      <StripeCheckoutButtonContainer onClick={ () => showStripeCheckoutPopup() }>BUY NOW</StripeCheckoutButtonContainer>

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

const mapStateToProps = createStructuredSelector({
  shoppingCartItems: selectShoppingCartItems,
  shoppingCartTotal: selectShoppingCartTotal,
  stripeCheckoutPopupHidden: selectStripeCheckoutPopupHidden
});


const mapDispatchToProps = dispatch => ({
  showStripeCheckoutPopup: () => dispatch(createShowCheckoutPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
