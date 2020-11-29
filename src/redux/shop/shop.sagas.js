import { ShopActionTypes } from './shop-action-types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase-utils';
import { createFetchCollectionsFailureAction, createFetchCollectionsSuccessAction } from './shop-actions';

function* fetchCollections() {
  try {
    const collectionReference = firestore.collection('collections');
    const snapshot = yield collectionReference.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(createFetchCollectionsSuccessAction(collectionsMap));
  } catch (error) {
    put(createFetchCollectionsFailureAction(error));
  }
}

function* fetchCollectionsStartSaga() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_STARTED, fetchCollections);
}

export function* collectionsSagas() {
  yield all([
    call(fetchCollectionsStartSaga)
  ]);
}
