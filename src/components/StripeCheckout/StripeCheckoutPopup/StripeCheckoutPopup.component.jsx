import React from 'react';
import './StripeCheckoutPopup.styles.scss';
import Button from '../../Button/Button.component';

const StripeCheckoutPopup = () => (
  <div className="stripe-checkout-popup">
    <div className="checkout-form">
      <Button additionalClassNames="close-button">Close</Button>
    </div>
  </div>
);

export default StripeCheckoutPopup;
