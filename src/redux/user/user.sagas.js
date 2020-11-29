import { all, call, put, takeLatest } from 'redux-saga/effects';
import { UserActionTypes } from './user-action-types';
import { signInWithGoogle } from '../../firebase/firebase-utils';
import { saveUser } from '../../firebase/user-repo';
import { createSignInFailureAction, createSignInSuccessAction } from './user-actions';

function* googleSignIn() {
  try {
    const { user } = yield signInWithGoogle();
    const userRef = yield call(saveUser, user);
    const userSnapshot = yield userRef.get();
    yield put(createSignInSuccessAction({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

export function* googleSignInStartSaga() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* emailAndPasswordSignInStartSaga() {

}

export function* userSagas() {
  yield all([
    call(googleSignInStartSaga),
    call(emailAndPasswordSignInStartSaga)
  ]);
}
