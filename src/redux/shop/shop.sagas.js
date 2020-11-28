import { ShopActionTypes } from './shop-action-types';
import { takeLatest, call, put } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase-utils';
import {
  createFetchCollectionsFailureAction,
  createFetchCollectionsSuccessAction
} from './shop-actions';

function* startFetchCollectionsAsync() {
  try {
    const collectionReference = firestore.collection('collections');
    const snapshot = yield collectionReference.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(createFetchCollectionsSuccessAction(collectionsMap));
  } catch (error) {
    put(createFetchCollectionsFailureAction(error));
  }
}

export function* fetchCollectionsStartSaga() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_STARTED,
    startFetchCollectionsAsync
  );
}
