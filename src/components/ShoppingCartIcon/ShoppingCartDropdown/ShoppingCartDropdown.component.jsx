import React from 'react';
import './ShoppingCartDropdown.styles.scss';
import Button from '../../Button/Button.component';

const ShoppingCartDropdown = () => (
  <div className="shopping-cart-dropdown">
    <div className="cart-items" />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default ShoppingCartDropdown;
