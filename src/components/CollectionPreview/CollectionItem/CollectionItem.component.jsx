import React from 'react';
import './CollectionItem.styles.scss';
import AddToCartButton from '../../AddToCartButton/AddToCartButton.component';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={ {
        backgroundImage: `url(${ imageUrl })`
      } }
    />
    <div className="footer">
      <div className="name">{ name }</div>
      <div className="price">${ price }</div>
    </div>
    <AddToCartButton />
  </div>
);

export default CollectionItem;
