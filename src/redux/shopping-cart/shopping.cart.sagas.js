import { all, call, put, takeLatest } from 'redux-saga/effects';
import { createClearShoppingCartAction } from './shopping-cart-actions';
import { UserActionTypes } from '../user/user-action-types';

function* clearCart() {
  yield put(createClearShoppingCartAction());
}

function* signOutSuccessSaga() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCart);
}

export function* shoppingCartSagas() {
  yield all([
    call(signOutSuccessSaga)
  ]);
}
