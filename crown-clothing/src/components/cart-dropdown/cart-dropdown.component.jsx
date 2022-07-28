import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {

  const { cartItems, cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      {cartCount === 0 ?
        (
          <EmptyMessage>
            <span>No items in cart!</span>
          </EmptyMessage>
        ) :
        (
          <CartItems>
            {cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))}
          </CartItems>
        )}
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;