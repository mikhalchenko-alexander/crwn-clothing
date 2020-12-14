import React from 'react';
import { ItemDetailsContainer, ShoppingCartItemContainer } from './ShoppingCartItem.styles';

const ShoppingCartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <ShoppingCartItemContainer>
    <img src={ imageUrl } alt="item" />
    <ItemDetailsContainer>
      <div>{ name }</div>
      <div>{ quantity } x ${ price }</div>
    </ItemDetailsContainer>
  </ShoppingCartItemContainer>
);

export default ShoppingCartItem;
