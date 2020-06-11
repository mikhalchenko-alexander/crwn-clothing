import { StripeCheckoutActionTypes } from './stripe-checkout-action-types';
import { setStripeCheckoutPopupHidden } from './stripe-checkout-utils';

const INITIAL_STATE = {
  popup: {
    hidden: true
  }
};

export const stripeCheckoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StripeCheckoutActionTypes.SHOW_CHECKOUT_POPUP:
      return setStripeCheckoutPopupHidden(state, false);

    case StripeCheckoutActionTypes.HIDE_CHECKOUT_POPUP:
      return setStripeCheckoutPopupHidden(state, true);

    default:
      return state;
  }
};
