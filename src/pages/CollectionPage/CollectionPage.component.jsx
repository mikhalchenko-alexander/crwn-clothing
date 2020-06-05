import React from 'react';
import './CollectionPage.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionByName } from '../../redux/shop/shop-selectors';

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h1>{ collection.title }</h1>
  </div>
);

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  collection: () => selectCollectionByName(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
