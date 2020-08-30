import React from 'react';
import {
  createAddItemToShoppingCartAction,
  createClearItemFromShoppingCartAction,
  createRemoveItemToShoppingCartAction
} from '../../redux/shopping-cart/shopping-cart-actions';
import { connect } from 'react-redux';
import {
  ArrowContainer,
  CheckoutItemContainer,
  ColumnContainer,
  ImageContainer,
  RemoveButtonContainer,
  ValueContainer
} from './CheckoutItem.styles';

const CheckoutItem = ({ item, clearItemFromShoppingCart, increaseItemCount, decreaseItemCount }) => (
  <CheckoutItemContainer>
    <ColumnContainer>
      <ImageContainer>
        <img src={ item.imageUrl } alt="item" />
      </ImageContainer>
    </ColumnContainer>
    <ColumnContainer>{ item.name }</ColumnContainer>
    <ColumnContainer>
      <ArrowContainer onClick={ () => decreaseItemCount(item.id) }>&#10094;</ArrowContainer>
      <ValueContainer>{ item.quantity }</ValueContainer>
      <ArrowContainer onClick={ () => increaseItemCount(item) }>&#10095;</ArrowContainer>
    </ColumnContainer>
    <ColumnContainer>${ item.price }</ColumnContainer>
    <RemoveButtonContainer onClick={ () => clearItemFromShoppingCart(item.id) }>&#10005;</RemoveButtonContainer>
  </CheckoutItemContainer>
);

const mapDispatchToProps = dispatch => ({
  increaseItemCount: item => dispatch(createAddItemToShoppingCartAction(item)),
  decreaseItemCount: item => dispatch(createRemoveItemToShoppingCartAction(item)),
  clearItemFromShoppingCart: itemId => dispatch(createClearItemFromShoppingCartAction(itemId))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
