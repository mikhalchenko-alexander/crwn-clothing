import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import ShoppingCartIcon from '../ShoppingCartIcon/ShoppingCartIcon.component';
import ShoppingCartDropdown from '../ShoppingCartIcon/ShoppingCartDropdown/ShoppingCartDropdown.component';

const Header = ({ currentUser, shoppingCartDropdownHidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {
        currentUser ?
          <div className="option" onClick={ () => auth.signOut() }>SIGN OUT</div> :
          <Link className="option" to="/sign-in">SIGN IN</Link>
      }
      <ShoppingCartIcon />
      {
        shoppingCartDropdownHidden ?
        null :
        <ShoppingCartDropdown />
      }
    </div>
  </div>
);

const mapStateToProps = ({ user: {currentUser}, shoppingCartDropdown: { hidden } }) => (
  {
    currentUser: currentUser,
    shoppingCartDropdownHidden: hidden
  }
)

export default connect(mapStateToProps)(Header);
