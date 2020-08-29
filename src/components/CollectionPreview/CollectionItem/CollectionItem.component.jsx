import React from 'react';
import './CollectionItem.styles.scss';
import { connect } from 'react-redux';
import { createAddItemToShoppingCartAction } from '../../../redux/shopping-cart/shopping-cart-actions';
import { ButtonContainer, ButtonStyles } from '../../Button/Button.styles';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return <div className="collection-item">
    <div
      className="image"
      style={ {
        backgroundImage: `url(${ imageUrl })`
      } }
    />
    <div className="footer">
      <div className="name">{ name }</div>
      <div className="price">${ price }</div>
    </div>
    <ButtonContainer className="add-to-cart-button" buttonStyle={ ButtonStyles.DEFAULT_BUTTON_INVERTED } onClick={ () => addItemToCart(item) }>ADD TO CART</ButtonContainer>
  </div>;
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => {
    dispatch(createAddItemToShoppingCartAction(item));
  }
});

export default connect(null, mapDispatchToProps)(CollectionItem);
