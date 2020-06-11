export const setStripeCheckoutPopupHidden = (state, hidden) => {
  return {
    ...state,
    popup: {
      ...state.popup,
      hidden: hidden
    }
  };
};
