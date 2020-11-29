import { all, call, put, takeLatest } from 'redux-saga/effects';
import { UserActionTypes } from './user-action-types';
import { auth, getUserSession, signInWithGoogle } from '../../firebase/firebase-utils';
import { saveUser } from '../../firebase/user-repo';
import {
  createSignInFailureAction,
  createSignInSuccessAction,
  createSignOutFailureAction,
  createSignOutSuccessAction,
  createSignUpFailureAction,
  createSignUpSuccessAction
} from './user-actions';

function* handleAuthentication(user, additionalData) {
  try {
    const userRef = yield call(saveUser, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(createSignInSuccessAction({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* googleSignIn() {
  try {
    const { user } = yield signInWithGoogle();
    yield handleAuthentication(user);
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield handleAuthentication(user);
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* checkUserSession() {
  try {
    const user = yield getUserSession();
    if (!user) return;
    yield handleAuthentication(user);
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(createSignOutSuccessAction());
  } catch (error) {
    yield put(createSignOutFailureAction(error));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(createSignUpSuccessAction({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(createSignUpFailureAction(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield handleAuthentication(user, additionalData);
}

function* googleSignInStartSaga() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

function* emailAndPasswordSignInStartSaga() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

function* checkUserSessionSaga() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession);
}

function* signOutStartSaga() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* signUpStartSaga() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* signUpSuccessSaga() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(googleSignInStartSaga),
    call(emailAndPasswordSignInStartSaga),
    call(checkUserSessionSaga),
    call(signOutStartSaga),
    call(signUpStartSaga),
    call(signUpSuccessSaga)
  ]);
}
