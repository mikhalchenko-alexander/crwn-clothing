import React from 'react';
import './ShoppingCartIcon.styles.scss'
import { ReactComponent as ShoppingBagIcon } from './shopping-bag.svg';

const CartIcon = () => (
  <div className="shopping-cart-icon">
    <ShoppingBagIcon className="shopping-bag-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
