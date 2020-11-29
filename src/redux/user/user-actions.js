import { UserActionTypes } from './user-action-types';

export const createGoogleSignInStartedAction = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const createEmailSignInStartedAction = credentials => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: credentials
});

export const createSignInSuccessAction = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const createSignInFailureAction = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});
