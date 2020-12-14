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

export const createCheckUserSessionAction = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const createSignOutStartAction = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const createSignOutSuccessAction = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const createSignOutFailureAction = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const createSignUpStartAction = (signUpFormData) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: signUpFormData
});

export const createSignUpSuccessAction = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const createSignUpFailureAction = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});
