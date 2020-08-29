import React from 'react';

import './CheckoutPage.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingCartItems, selectShoppingCartTotal } from '../../redux/shopping-cart/shopping-cart-selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeCheckoutPopup from '../../components/StripeCheckout/StripeCheckoutPopup/StripeCheckoutPopup.component';
import { selectStripeCheckoutPopupHidden } from '../../redux/stripe-checkout/stripe-checkout-selectors';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../stripe/stripe-utils';
import { createShowCheckoutPopup } from '../../redux/stripe-checkout/stripe-checkout-actions';
import { ButtonContainer } from '../../components/Button/Button.styles';

const CheckoutPage = ({ shoppingCartItems, shoppingCartTotal, stripeCheckoutPopupHidden, showStripeCheckoutPopup }) => {
  const HeaderBlock = ({ title }) => (
    <div className="header-block">
      <span>{ title }</span>
    </div>
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <HeaderBlock title="Product" />
        <HeaderBlock title="Description" />
        <HeaderBlock title="Quantity" />
        <HeaderBlock title="Price" />
        <HeaderBlock title="Remove" />
      </div>
      {
        shoppingCartItems.map(cartItem => <CheckoutItem key={ cartItem.id } item={ cartItem } />)
      }

      <div className="total">
        <span>${ shoppingCartTotal }</span>
      </div>

      <ButtonContainer className="stripe-checkout-button" onClick={ () => showStripeCheckoutPopup() }>BUY NOW</ButtonContainer>

      {
        stripeCheckoutPopupHidden ?
          null :
          <Elements stripe={ stripePromise }>
            <StripeCheckoutPopup />
          </Elements>
      }
    </div>
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
