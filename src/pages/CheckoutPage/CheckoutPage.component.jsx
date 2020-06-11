import React from 'react';

import './CheckoutPage.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingCartItems, selectShoppingCartTotal } from '../../redux/shopping-cart/shopping-cart-selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeCheckoutButton from '../../components/StripeCheckout/StripeCheckoutButton/StripeCheckoutButton.component';

const CheckoutPage = ({ shoppingCartItems, shoppingCartTotal }) => {
  const HeaderBlock = ({ title }) => (
    <div className="header-block">
      <span>{ title }</span>
    </div>
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <HeaderBlock title="Product" />
        <HeaderBlock title="Description" />
        <HeaderBlock title="Quantity" />
        <HeaderBlock title="Price" />
        <HeaderBlock title="Remove" />
      </div>
      {
        shoppingCartItems.map(cartItem => <CheckoutItem key={ cartItem.id } item={ cartItem } />)
      }

      <div className="total">
        <span>${ shoppingCartTotal }</span>
      </div>

      <StripeCheckoutButton />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shoppingCartItems: selectShoppingCartItems,
  shoppingCartTotal: selectShoppingCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
