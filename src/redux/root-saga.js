import { all, call } from 'redux-saga/effects';
import { collectionsSagas } from './shop/shop-sagas';
import { userSagas } from './user/user-sagas';
import { shoppingCartSagas } from './shopping-cart/shopping-cart-sagas';

export function* rootSaga() {
  yield all([
    call(collectionsSagas),
    call(userSagas),
    call(shoppingCartSagas)
  ]);
}
