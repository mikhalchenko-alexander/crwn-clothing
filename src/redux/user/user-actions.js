import { UserActionTypes } from './user-action-types';

export const createGoogleSignInStartedAction = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const createSignInSuccessAction = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const createSignInFailureAction = error => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: error
});
