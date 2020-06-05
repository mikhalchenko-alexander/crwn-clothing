import React from 'react';
import './CollectionPage.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionByName } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../components/CollectionPreview/CollectionItem/CollectionItem.component';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return <div className="collection-page">
    <h2 className="title">{ title }</h2>
    <div className="items">
      { items.map(item => <CollectionItem key={ item.id } item={ item } />) }
    </div>
  </div>;
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  collection: () => selectCollectionByName(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
