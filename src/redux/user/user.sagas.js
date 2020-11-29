import { all, call, put, takeLatest } from 'redux-saga/effects';
import { UserActionTypes } from './user-action-types';
import { auth, signInWithGoogle } from '../../firebase/firebase-utils';
import { saveUser } from '../../firebase/user-repo';
import { createSignInFailureAction, createSignInSuccessAction } from './user-actions';

function* handleAuthentication(user) {
  try {
    const userRef = yield call(saveUser, user);
    const userSnapshot = yield userRef.get();
    yield put(createSignInSuccessAction({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* googleSignIn() {
  try {
    const { user } = yield signInWithGoogle();
    handleAuthentication(user);
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    handleAuthentication(user);
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* googleSignInStartSaga() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

function* emailAndPasswordSignInStartSaga() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* userSagas() {
  yield all([
    call(googleSignInStartSaga),
    call(emailAndPasswordSignInStartSaga)
  ]);
}
