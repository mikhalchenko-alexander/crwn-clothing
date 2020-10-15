import React from 'react';
import './CollectionPage.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionByName } from '../../redux/shop/shop-selectors';
import CollectionView from '../../components/CollectionView/CollectionView.component';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return <div className="collection-page">
    <CollectionView title={ title } items={ items } />
  </div>;
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  collection: () => selectCollectionByName(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
