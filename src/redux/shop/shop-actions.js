import { ShopActionTypes } from './shop-action-types';

export const createFetchCollectionsStartedAction = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_STARTED
});

export const createFetchCollectionsSuccessAction = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const createFetchCollectionsFailureAction = error => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  error: error
});
