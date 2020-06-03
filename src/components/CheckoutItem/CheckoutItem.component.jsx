import React from 'react';
import './CheckoutItem.styles.scss';
import {
  createAddItemToShoppingCartAction,
  createClearItemFromShoppingCartAction,
  createRemoveItemToShoppingCartAction
} from '../../redux/shopping-cart/shopping-cart-actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, clearItemFromShoppingCart, increaseItemCount, decreaseItemCount }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={ item.imageUrl } alt="item" />
    </div>
    <div className="name">{ item.name }</div>
    <div className="quantity">
      <span className="arrow" onClick={ () => decreaseItemCount(item.id) }>&#10094;</span>
      <span className="value">{ item.quantity }</span>
      <span className="arrow" onClick={ () => increaseItemCount(item) }>&#10095;</span>
    </div>
    <div className="price">${ item.price }</div>
    <div className="remove-button" onClick={ () => clearItemFromShoppingCart(item.id) }>&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  increaseItemCount: item => dispatch(createAddItemToShoppingCartAction(item)),
  decreaseItemCount: item => dispatch(createRemoveItemToShoppingCartAction(item)),
  clearItemFromShoppingCart: itemId => dispatch(createClearItemFromShoppingCartAction(itemId))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
