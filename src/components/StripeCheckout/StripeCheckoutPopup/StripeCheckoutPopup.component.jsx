import React from 'react';
import './StripeCheckoutPopup.styles.scss';
import Button from '../../Button/Button.component';
import { createHideCheckoutPopup } from '../../../redux/stripe-checkout/stripe-checkout-actions';
import { connect } from 'react-redux';

const StripeCheckoutPopup = ({ hideStripeCheckoutPopup }) => (
  <div className="stripe-checkout-popup">
    <div className="checkout-form">
      <Button onClick={ () => hideStripeCheckoutPopup() } additionalClassNames="close-button">Close</Button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  hideStripeCheckoutPopup: () => dispatch(createHideCheckoutPopup())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutPopup);
