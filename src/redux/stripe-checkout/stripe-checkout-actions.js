import { StripeCheckoutActionTypes } from './stripe-checkout-action-types';

export const createShowCheckoutPopup = () => ({
  type: StripeCheckoutActionTypes.SHOW_CHECKOUT_POPUP,
  payload: null
});

export const createHideCheckoutPopup = () => ({
  type: StripeCheckoutActionTypes.HIDE_CHECKOUT_POPUP,
  payload: null
});
