import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {

  const { cartItems, cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <div className='cart-dropdown-container'>
      {cartCount === 0 ?
        (
          <div className='empty-message'>
            <span>No items in cart!</span>
          </div>
        ) :
        (
          <div className='cart-items'>
            {cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))}
          </div>
        )}      
        <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </div>
  );
}

export default CartDropdown;