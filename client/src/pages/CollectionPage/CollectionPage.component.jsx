import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionByName } from '../../redux/shop/shop-selectors';
import CollectionView from '../../components/CollectionView/CollectionView.component';

const CollectionPage = ({ match }) => {
  const collection = useSelector(selectCollectionByName(match.params.collectionId));
  console.log(collection);
  return <CollectionView { ...collection } />;
};

export default CollectionPage;
