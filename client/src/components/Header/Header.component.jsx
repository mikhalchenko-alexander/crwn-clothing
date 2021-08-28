import React from 'react';
import { ReactComponent as Logo } from './crown.svg';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '../ShoppingCartIcon/ShoppingCartIcon.component';
import ShoppingCartDropdown from '../ShoppingCartIcon/ShoppingCartDropdown/ShoppingCartDropdown.component';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectShoppingCartDropdownHidden } from '../../redux/shopping-cart/shopping-cart-dropdown/shopping-cart-dropdown-selectors';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './Header.styles';
import { createSignOutStartAction } from '../../redux/user/user-actions';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const shoppingCartDropdownHidden = useSelector(selectShoppingCartDropdownHidden);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {
          currentUser ?
            <OptionLink as="div" onClick={ () => dispatch(createSignOutStartAction()) }>SIGN OUT</OptionLink> :
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
};

export default Header;
