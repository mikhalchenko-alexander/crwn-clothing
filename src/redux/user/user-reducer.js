import { UserActionTypes } from './user-action-types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      console.log('Sign in success', action.payload);
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };

    case UserActionTypes.SIGN_IN_FAILURE:
      console.log('Sign in failure', action.payload);
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
