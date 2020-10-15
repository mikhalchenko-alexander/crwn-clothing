import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionByName } from '../../redux/shop/shop-selectors';
import CollectionView from '../../components/CollectionView/CollectionView.component';

const CollectionPage = ({ collection }) => <CollectionView { ...collection } />;

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  collection: () => selectCollectionByName(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
