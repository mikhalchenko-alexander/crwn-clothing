import React from 'react';
import './ShoppingCartItem.styles.scss';

const ShoppingCartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="shopping-cart-item">
    <img src={ imageUrl } alt="item" />
    <div className="item-details">
      <div className="name">{ name }</div>
      <div className="price">{ quantity } x ${ price }</div>
    </div>
  </div>
);

export default ShoppingCartItem;
