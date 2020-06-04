import React from 'react';
import './CollectionItem.styles.scss';
import AddToCartButton from '../../AddToCartButton/AddToCartButton.component';
import { connect } from 'react-redux';
import { createAddItemToShoppingCartAction } from '../../../redux/shopping-cart/shopping-cart-actions';

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
    <AddToCartButton onClick={ () => addItemToCart(item) } />
  </div>;
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => {
    dispatch(createAddItemToShoppingCartAction(item));
  }
});

export default connect(null, mapDispatchToProps)(CollectionItem);