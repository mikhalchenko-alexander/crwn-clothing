import React from 'react';
import './StripeCheckoutButton.styles.scss';
import Button from '../Button/Button.component';

const StripeCheckoutButton = (props) => (
  <Button type="button" additionalClassNames="stripe-checkout-button" { ...props }>Buy Now</Button>
);

export default StripeCheckoutButton;
