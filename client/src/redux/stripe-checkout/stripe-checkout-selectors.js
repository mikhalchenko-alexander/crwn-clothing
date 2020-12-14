import { createSelector } from 'reselect';

const selectStripeCheckout = state => state.stripeCheckout;

const selectStripeCheckoutPopup = createSelector(
  [selectStripeCheckout],
  stripeCheckout => stripeCheckout.popup
);

export const selectStripeCheckoutPopupHidden = createSelector(
  [selectStripeCheckoutPopup],
  stripeCheckoutPopup => stripeCheckoutPopup.hidden
);
