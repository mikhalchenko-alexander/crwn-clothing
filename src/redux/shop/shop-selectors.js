import { createSelector } from 'reselect';

const shopData = state => state.shopData;

export const selectShopDataCollections = createSelector(
  [shopData],
  shopData => shopData.collections
);
