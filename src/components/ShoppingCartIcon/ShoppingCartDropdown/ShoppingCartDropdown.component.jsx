import React from 'react';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem.component';
import { connect } from 'react-redux';
import { selectShoppingCartItems } from '../../../redux/shopping-cart/shopping-cart-selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { createToggleHiddenShoppingCartDropdownAction } from '../../../redux/shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-actions';
import {
  CartItemsContainer,
  CheckoutButtonContainer,
  EmptyMessageContainer,
  ShoppingCartDropdownContainer
} from './ShoppingCartDropdown.styles';

class ShoppingCartDropdown extends React.Component {

  handleGoToCheckout = () => {
    const { history, toggleShoppingCartDropdownHidden } = this.props;
    toggleShoppingCartDropdownHidden();
    history.push('/checkout');
  };

  render() {
    const { shoppingCartItems } = this.props;
    return (
      <ShoppingCartDropdownContainer>
        <CartItemsContainer>
          {
            shoppingCartItems.length ?
              shoppingCartItems.map(item => <ShoppingCartItem key={ item.id } item={ item } />) :
              <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
          }
        </CartItemsContainer>
        <CheckoutButtonContainer onClick={ () => this.handleGoToCheckout() }>GO TO CHECKOUT</CheckoutButtonContainer>
      </ShoppingCartDropdownContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shoppingCartItems: selectShoppingCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleShoppingCartDropdownHidden: () => dispatch(createToggleHiddenShoppingCartDropdownAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDropdown));
