import React, { useState } from 'react';
import './StripeCheckoutPopup.styles.scss';
import Button from '../../Button/Button.component';
import { createHideCheckoutPopup } from '../../../redux/stripe-checkout/stripe-checkout-actions';
import { connect } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

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

async function stripeTokenHandler(token, onComplete) {
  // TODO: replace log with backend charge
  console.log(token);
  if (onComplete) onComplete();
}

const StripeCheckoutPopup = ({ hideStripeCheckoutPopup }) => {
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
      await stripeTokenHandler(result.token, hideStripeCheckoutPopup);
    }
  };

  return <div className="stripe-checkout-popup">
    <form className="checkout-form" onSubmit={ handleSubmit }>
      <div className="form-row">
        <label htmlFor="card-element">Credit or debit card</label>
        <CardElement id="card-element" options={ CARD_ELEMENT_OPTIONS } onChange={ handleChange } />
        <div className="card-errors" role="alert">{ error }</div>
      </div>
      <div className="buttons">
        <Button onClick={ () => hideStripeCheckoutPopup() } additionalClassNames="close-button">Close</Button>
        <Button type="submit" additionalClassNames="submit-button">Submit Payment</Button>
      </div>
    </form>
  </div>;
};

const mapDispatchToProps = dispatch => ({
  hideStripeCheckoutPopup: () => dispatch(createHideCheckoutPopup())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutPopup);
