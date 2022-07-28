
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {CheckoutItemContainer, ImageContainer, Arrow, Value, RemoveButton, BaseSpan, Quantity } from './checkout-item.styles.jsx';

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItem}>
          <span > &#10094; </span>
        </Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={addItem}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan>{totalPrice}</BaseSpan>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );

}

export default CheckoutItem;