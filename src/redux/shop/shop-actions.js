import { ShopActionTypes } from './shop-action-types';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase-utils';

export const crateFetchCollectionsStartedAction = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_STARTED
});

export const crateFetchCollectionsSuccessAction = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const crateFetchCollectionsFailureAction = error => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  error: error
});

export const crateFetchCollectionsStartedAsyncAction = () => dispatch => {
  dispatch(crateFetchCollectionsStartedAction());
  let collectionReference = firestore.collection('collections');
  collectionReference.get()
    .then(snapshot => {
      let collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(crateFetchCollectionsSuccessAction(collectionsMap));
    })
    .catch(error => dispatch(crateFetchCollectionsFailureAction(error)));
};
