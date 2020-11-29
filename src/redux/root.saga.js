import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStartSaga } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { shoppingCartSagas } from './shopping-cart/shopping.cart.sagas';

export function* rootSaga() {
  yield all([
    call(fetchCollectionsStartSaga),
    call(userSagas),
    call(shoppingCartSagas)
  ]);
}
