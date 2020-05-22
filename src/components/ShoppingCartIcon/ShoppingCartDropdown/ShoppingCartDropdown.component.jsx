import React from 'react';
import './ShoppingCartDropdown.styles.scss';
import Button from '../../Button/Button.component';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem.component';
import { connect } from 'react-redux';

const ShoppingCartDropdown = ({ shoppingCartItems }) => (
  <div className="shopping-cart-dropdown">
    <div className="cart-items">
      {
        shoppingCartItems.map(item => <ShoppingCartItem key={ item.id } item={ item } />)
      }
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = state => ({
  shoppingCartItems: state.shoppingCart.cartItems
});

export default connect(mapStateToProps)(ShoppingCartDropdown);
