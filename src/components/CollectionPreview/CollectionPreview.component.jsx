import React from 'react';
import CollectionItem from './CollectionItem/CollectionItem.component';
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './CollectionPreview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{ title.toUpperCase() }</TitleContainer>
    <PreviewContainer>
      {
        items
          .slice(0, 4)
          .map(item =>
            <CollectionItem key={ item.id } item={ item } />
          )
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
