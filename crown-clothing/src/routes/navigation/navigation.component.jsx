import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from "../../store/cart/cart.selector"

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrownLogo } from '../../assets/img/crown.svg';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles';

const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);


  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser !== null ?
              (
                <NavLink as='span' onClick={signOutHandler}>
                  SIGN OUT
                </NavLink>
              ) :
              (
                <NavLink to='/auth'>
                  SIGN IN
                </NavLink>
              )
          }
          <CartIcon />
        </NavLinksContainer>
        {
          isCartOpen && <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;