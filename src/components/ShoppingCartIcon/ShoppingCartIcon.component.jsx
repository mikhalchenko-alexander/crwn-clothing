import React from 'react';
import './ShoppingCartIcon.styles.scss';
import { ReactComponent as ShoppingBagIcon } from './shopping-bag.svg';
import { createToggleHiddenShoppingCartDropdownAction } from '../../redux/shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-actions';
import { connect } from 'react-redux';
import { selectShoppingCartItemsCount } from '../../redux/shopping-cart/shopping-cart-selectors';

const ShoppingCartIcon = ({ toggleCartHidden, itemCount }) => (
  <div onClick={ toggleCartHidden } className="shopping-cart-icon">
    <ShoppingBagIcon className="shopping-bag-icon" />
    <span className="item-count">{ itemCount }</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(createToggleHiddenShoppingCartDropdownAction())
});

const mapStateToProps = state => ({
  itemCount: selectShoppingCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon);
