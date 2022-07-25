
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {

  const { name, price, quantity, imageUrl } = cartItem;
  const totalPrice = price * quantity;

  const { removeItemFromCart, addItemToCart, clearItemFromCart } = useContext(CartContext);

  const removeItem = () => {
    removeItemFromCart(cartItem);
  }

  const addItem = () => {
    addItemToCart(cartItem);
  }

  const clearItem = () => {
    clearItemFromCart(cartItem);
  }

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItem}>
          <span > &#10094; </span>
        </div>
        <span className='value'> {quantity}</span>
        <div className='arrow' onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className='price'>{totalPrice}</span>
      <div className='remove-button' onClick={clearItem}>&#10005;</div>
    </div>
  );

}

export default CheckoutItem;