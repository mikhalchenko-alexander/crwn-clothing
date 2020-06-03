import React from 'react';
import './CheckoutItem.styles.scss';
import { createClearItemFromShoppingCartAction } from '../../redux/shopping-cart/shopping-cart-actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, clearItemFromShoppingCart }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={ item.imageUrl } alt="item" />
    </div>
    <div className="name">{ item.name }</div>
    <div className="quantity">{ item.quantity }</div>
    <div className="price">${ item.price }</div>
    <div className="remove-button" onClick={ () => clearItemFromShoppingCart(item.id) }>&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  clearItemFromShoppingCart: itemId => dispatch(createClearItemFromShoppingCartAction(itemId))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
