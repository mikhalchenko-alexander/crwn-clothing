import React from 'react';
import { ReactComponent as Logo } from './crown.svg';
import { auth } from '../../firebase/firebase-utils';
import { connect } from 'react-redux';
import ShoppingCartIcon from '../ShoppingCartIcon/ShoppingCartIcon.component';
import ShoppingCartDropdown from '../ShoppingCartIcon/ShoppingCartDropdown/ShoppingCartDropdown.component';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectShoppingCartDropdownHidden } from '../../redux/shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-selectors';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './Header.styles';

const Header = ({ currentUser, shoppingCartDropdownHidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {
        currentUser ?
          <OptionLink as="div" onClick={ () => auth.signOut() }>SIGN OUT</OptionLink> :
          <OptionLink to="/sign-in">SIGN IN</OptionLink>
      }
      <ShoppingCartIcon />
      {
        shoppingCartDropdownHidden ?
          null :
          <ShoppingCartDropdown />
      }
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  shoppingCartDropdownHidden: selectShoppingCartDropdownHidden
});

export default connect(mapStateToProps)(Header);
