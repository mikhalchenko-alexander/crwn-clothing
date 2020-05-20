import { UserActionTypes } from './user-action-types';

export const createSetCurrentUserAction = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
