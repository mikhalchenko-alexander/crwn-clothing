import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStartSaga } from './shop/shop.sagas';

export function* rootSaga() {
  yield all([
    call(fetchCollectionsStartSaga)
  ]);
}
