import { createSelector } from 'reselect';
import { COLLECTION_ID_MAP } from './shop.data';

const shopData = state => state.shopData;

export const selectShopDataCollections = createSelector(
  [shopData],
  shopData => shopData.collections
);

export const selectCollectionByName = collectionName => createSelector(
  [selectShopDataCollections],
  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionName])
);
