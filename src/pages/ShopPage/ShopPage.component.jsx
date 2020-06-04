import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopDataCollections } from '../../redux/shop/shop-selectors';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {
      collections.map(({ id, ...otherCollectionProps }) =>
        <CollectionPreview
          key={ id }
          { ...otherCollectionProps } />
      )
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataCollections
});

export default connect(mapStateToProps)(ShopPage);
