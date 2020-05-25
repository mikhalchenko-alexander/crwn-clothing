import React from 'react';
import './ShoppingCartDropdown.styles.scss';
import Button from '../../Button/Button.component';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem.component';
import { connect } from 'react-redux';
import { selectShoppingCartItems } from '../../../redux/shopping-cart/shopping-cart-selectors';
import { createStructuredSelector } from 'reselect';

const ShoppingCartDropdown = ({ shoppingCartItems }) => (
  <div className="shopping-cart-dropdown">
    <div className="cart-items">
      {
        shoppingCartItems.length ?
          shoppingCartItems.map(item => <ShoppingCartItem key={ item.id } item={ item } />) :
          <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  shoppingCartItems: selectShoppingCartItems
});

export default connect(mapStateToProps)(ShoppingCartDropdown);
