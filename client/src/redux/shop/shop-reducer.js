import { ShopActionTypes } from './shop-action-types';

const INITIAL_STATE = {
  collections: null,
  isFetchingCollections: false
};

export const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_STARTED:
      return {
        ...state,
        isFetchingCollections: true
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetchingCollections: false,
        collections: action.payload
      };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetchingCollections: false,
        fetchError: action.payload
      };

    default:
      return state;
  }
};
