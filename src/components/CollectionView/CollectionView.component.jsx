import React from 'react';
import CollectionItem from './CollectionItem/CollectionItem.component';
import { CollectionViewContainer, TitleContainer, ViewContainer } from './CollectionView.styles';

const CollectionView = ({ title, items }) => (
  <CollectionViewContainer>
    <TitleContainer>{ title.toUpperCase() }</TitleContainer>
    <ViewContainer>
      {
        items
          .map(item =>
            <CollectionItem key={ item.id } item={ item } />
          )
      }
    </ViewContainer>
  </CollectionViewContainer>
);

export default CollectionView;
