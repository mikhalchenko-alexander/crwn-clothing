import React, { useState } from 'react';
import { createHideCheckoutPopup } from '../../../redux/stripe-checkout/stripe-checkout-actions';
import { connect } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
  CardErrorsContainer,
  CheckoutFormContainer,
  StripeCheckoutButtonContainer,
  StripeCheckoutButtonsContainer,
  StripeCheckoutPopupContainer
} from './StripeCheckoutPopup.styles';
import axios from 'axios';
import { createStructuredSelector } from 'reselect';
import { selectShoppingCartTotal } from '../../../redux/shopping-cart/shopping-cart-selectors';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  },
  hidePostalCode: true
};

async function stripeTokenHandler(token, shoppingCartTotal, onComplete) {
  const stripeAmount = shoppingCartTotal * 100;
  axios({
    url: 'payment',
    method: 'post',
    data: {
      amount: stripeAmount,
      token
    }
  }).then(response => {
    alert('Payment successful');
  }).catch(error => {
    console.log('Payment error', error);
  });
  if (onComplete) onComplete();
}

const StripeCheckoutPopup = ({ shoppingCartTotal, hideStripeCheckoutPopup }) => {
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      setError(result.error.message);
    } else {
      setError(null);
      await stripeTokenHandler(result.token, shoppingCartTotal, hideStripeCheckoutPopup);
    }
  };

  return <StripeCheckoutPopupContainer>
    <CheckoutFormContainer onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="card-element">Credit or debit card</label>
        <CardElement id="card-element" options={ CARD_ELEMENT_OPTIONS } onChange={ handleChange } />
        <CardErrorsContainer role="alert">{ error }</CardErrorsContainer>
      </div>
      <StripeCheckoutButtonsContainer>
        <StripeCheckoutButtonContainer id="close-button"
                                       onClick={ () => hideStripeCheckoutPopup() }>Close</StripeCheckoutButtonContainer>
        <StripeCheckoutButtonContainer id="submit-button" type="submit">Submit Payment</StripeCheckoutButtonContainer>
      </StripeCheckoutButtonsContainer>
    </CheckoutFormContainer>
  </StripeCheckoutPopupContainer>;
};

const mapStateToProps = createStructuredSelector({
  shoppingCartTotal: selectShoppingCartTotal
});

const mapDispatchToProps = dispatch => ({
  hideStripeCheckoutPopup: () => dispatch(createHideCheckoutPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutPopup);
