import React from 'react';

import './CollectionsOverview.styles.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import { createStructuredSelector } from 'reselect';
import { selectShopDataCollections } from '../../redux/shop/shop-selectors';
import { connect } from 'react-redux';

const CollectionsOverview = ({ collections }) => (
  collections.map(({ id, ...otherCollectionProps }) =>
    <CollectionPreview
      key={ id }
      { ...otherCollectionProps } />
  )
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
