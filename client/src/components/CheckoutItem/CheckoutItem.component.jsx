import React from 'react';
import {
  createAddItemToShoppingCartAction,
  createClearItemFromShoppingCartAction,
  createRemoveItemToShoppingCartAction
} from '../../redux/shopping-cart/shopping-cart-actions';
import { useDispatch } from 'react-redux';
import {
  ArrowContainer,
  CheckoutItemContainer,
  ColumnContainer,
  ImageContainer,
  RemoveButtonContainer,
  ValueContainer
} from './CheckoutItem.styles';

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <ColumnContainer>
        <ImageContainer>
          <img src={ item.imageUrl } alt="item" />
        </ImageContainer>
      </ColumnContainer>
      <ColumnContainer>{ item.name }</ColumnContainer>
      <ColumnContainer>
        <ArrowContainer
          onClick={ () => dispatch(createRemoveItemToShoppingCartAction(item.id)) }>&#10094;</ArrowContainer>
        <ValueContainer>{ item.quantity }</ValueContainer>
        <ArrowContainer onClick={ () => dispatch(createAddItemToShoppingCartAction(item)) }>&#10095;</ArrowContainer>
      </ColumnContainer>
      <ColumnContainer>${ item.price }</ColumnContainer>
      <RemoveButtonContainer
        onClick={ () => dispatch(createClearItemFromShoppingCartAction(item.id)) }>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
