import React from 'react';
import './AddToCartButton.styles.scss';
import Button from '../Button/Button.component';

const AddToCartButton = (props) => (
  <Button additionalClassNames="add-to-cart-button" { ...props }>ADD TO CART</Button>
);

export default AddToCartButton;
