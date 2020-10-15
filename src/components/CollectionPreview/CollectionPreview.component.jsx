import React from 'react';
import CollectionView from '../CollectionView/CollectionView.component';

const CollectionPreview = ({ items, ...otherProps }) => (
  <CollectionView items={ items.slice(0, 4) } { ...otherProps } />
);

export default CollectionPreview;
