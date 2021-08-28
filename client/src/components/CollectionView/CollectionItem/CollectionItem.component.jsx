import React from 'react';
import { useDispatch } from 'react-redux';
import { createAddItemToShoppingCartAction } from '../../../redux/shopping-cart/shopping-cart-actions';
import { ButtonContainer, ButtonStyles } from '../../Button/Button.styles';
import {
  BackgroundImageContainer,
  CollectionItemContainer,
  FooterContainer,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;
  return <CollectionItemContainer>
    <BackgroundImageContainer imageUrl={ imageUrl } />
    <FooterContainer>
      <NameContainer>{ name }</NameContainer>
      <PriceContainer>${ price }</PriceContainer>
    </FooterContainer>
    <ButtonContainer buttonStyle={ ButtonStyles.DEFAULT_BUTTON_INVERTED }
                     onClick={ () => dispatch(createAddItemToShoppingCartAction(item)) }>ADD TO
      CART</ButtonContainer>
  </CollectionItemContainer>;
};

export default CollectionItem;
