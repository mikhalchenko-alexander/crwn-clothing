import React from 'react';
import './ShoppingCartIcon.styles.scss'
import { ReactComponent as ShoppingBagIcon } from './shopping-bag.svg';
import { createToggleHiddenShoppingCartDropdownAction } from '../../redux/shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-actions';
import { connect } from 'react-redux';

const ShoppingCartIcon = ({ toggleCartHidden }) => (
  <div onClick={ toggleCartHidden } className="shopping-cart-icon">
    <ShoppingBagIcon className="shopping-bag-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(createToggleHiddenShoppingCartDropdownAction())
});

export default connect(null, mapDispatchToProps)(ShoppingCartIcon);
