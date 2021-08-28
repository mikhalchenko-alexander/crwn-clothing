import React from 'react';

import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import { selectShopDataCollectionsAsArray } from '../../redux/shop/shop-selectors';
import { useSelector } from 'react-redux';

const CollectionsOverview = () => {
  const collections = useSelector(selectShopDataCollectionsAsArray);

  return (
    collections.map(({ id, ...otherCollectionProps }) =>
      <CollectionPreview
        key={ id }
        { ...otherCollectionProps } />
    )
  );
};

export default CollectionsOverview;
