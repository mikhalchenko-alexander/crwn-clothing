import React from 'react';
import CollectionItem from './CollectionItem/CollectionItem.component';
import { CollectionViewContainer, TitleContainer, ViewContainer } from './CollectionView.styles';
import { Link } from 'react-router-dom';

const CollectionView = ({ title, items, routeName }) => (
  <CollectionViewContainer>
    <TitleContainer>
      <Link to={ `/shop/${ routeName }` }>{ title.toUpperCase() }</Link>
    </TitleContainer>
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
