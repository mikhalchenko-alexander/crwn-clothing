import React from 'react';
import './StripeCheckoutButton.styles.scss';
import Button from '../../Button/Button.component';
import { createShowCheckoutPopup } from '../../../redux/stripe-checkout/stripe-checkout-actions';
import { connect } from 'react-redux';

const StripeCheckoutButton = (props) => {
  const { showStripeCheckoutPopup } = props;
  return <Button onClick={ () => showStripeCheckoutPopup() }
                 type="button"
                 additionalClassNames="stripe-checkout-button" { ...props }>Buy Now</Button>;
};

const mapDispatchToProps = dispatch => ({
  showStripeCheckoutPopup: () => dispatch(createShowCheckoutPopup())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
