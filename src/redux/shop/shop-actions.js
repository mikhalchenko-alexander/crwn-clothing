import { ShopActionTypes } from './shop-action-types';

export const createUpdateCollectionsAction = collections => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections
});
