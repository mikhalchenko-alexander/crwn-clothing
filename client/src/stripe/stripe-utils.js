import { loadStripe } from '@stripe/stripe-js';

const publishableKey = 'pk_test_eNZjMHzxeE0z4B376x46HsYB';
const options = {};

export const stripePromise = loadStripe(publishableKey, options);
