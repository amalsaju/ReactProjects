import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems, selectCartCount  } from '../../store/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

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