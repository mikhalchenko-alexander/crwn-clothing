import { createSelector } from 'reselect';

const shopData = state => state.shopData;

export const selectShopDataCollections = createSelector(
  [shopData],
  shopData => shopData.collections
);

export const selectShopDataCollectionsAsArray = createSelector(
  [selectShopDataCollections],
  collectionsObject => collectionsObject ? Object.values(collectionsObject) : []
);

export const selectCollectionByName = collectionName => createSelector(
  [selectShopDataCollections],
  collections => collections ? collections[collectionName] : null
);

export const selectShopDataCollectionsLoaded = createSelector(
  [selectShopDataCollectionsAsArray],
  collections => collections.length !== 0
);

export const selectShopDataCollectionsFetching = createSelector(
  [shopData],
  shopData => shopData.isFetchingCollections
);
