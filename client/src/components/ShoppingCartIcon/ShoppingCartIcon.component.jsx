import React from 'react';
import { createToggleHiddenShoppingCartDropdownAction } from '../../redux/shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-actions';
import { connect } from 'react-redux';
import { selectShoppingCartItemsCount } from '../../redux/shopping-cart/shopping-cart-selectors';
import { createStructuredSelector } from 'reselect';
import { ItemCountContainer, ShoppingBagIconContainer, ShoppingCartIconContainer } from './ShoppingCartIcon.styles';

const ShoppingCartIcon = ({ toggleCartHidden, itemCount }) => (
  <ShoppingCartIconContainer onClick={ toggleCartHidden }>
    <ShoppingBagIconContainer />
    <ItemCountContainer>{ itemCount }</ItemCountContainer>
  </ShoppingCartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(createToggleHiddenShoppingCartDropdownAction())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectShoppingCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon);
