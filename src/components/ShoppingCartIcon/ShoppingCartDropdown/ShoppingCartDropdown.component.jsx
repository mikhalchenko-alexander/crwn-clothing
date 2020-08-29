import React from 'react';
import './ShoppingCartDropdown.styles.scss';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem.component';
import { connect } from 'react-redux';
import { selectShoppingCartItems } from '../../../redux/shopping-cart/shopping-cart-selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { createToggleHiddenShoppingCartDropdownAction } from '../../../redux/shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-actions';
import * as PropTypes from 'prop-types';
import { ButtonContainer } from '../../Button/Button.styles';

class ShoppingCartDropdown extends React.Component {

  handleGoToCheckout = () => {
    const { history, toggleShoppingCartDropdownHidden } = this.props;
    toggleShoppingCartDropdownHidden();
    history.push('/checkout');
  };

  render() {
    const { shoppingCartItems } = this.props;
    return (
      <div className="shopping-cart-dropdown">
        <div className="cart-items">
          {
            shoppingCartItems.length ?
              shoppingCartItems.map(item => <ShoppingCartItem key={ item.id } item={ item } />) :
              <span className="empty-message">Your cart is empty</span>
          }
        </div>
        <ButtonContainer onClick={ () => this.handleGoToCheckout() }>GO TO CHECKOUT</ButtonContainer>
      </div>
    );
  }
}

ShoppingCartDropdown.propTypes = {
  shoppingCartItems: PropTypes.any,
  history: PropTypes.any,
  toggleShoppingCartDropdownHidden: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
  shoppingCartItems: selectShoppingCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleShoppingCartDropdownHidden: () => dispatch(createToggleHiddenShoppingCartDropdownAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDropdown));
