import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action.js';

import { CheckoutItemContainer, ImageContainer, Arrow, Value, RemoveButton, BaseSpan, Quantity } from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {

  const dispatch = useDispatch();
  
  const { name, price, quantity, imageUrl } = cartItem;
  const totalPrice = price * quantity;
  const cartItems = useSelector(selectCartItems);
  // const { removeItemFromCart, addItemToCart, clearItemFromCart } = useContext(CartContext);

  const removeItem = () => dispatch(removeItemFromCart(cartItems, cartItem));


  const addItem = () => dispatch(addItemToCart(cartItems, cartItem));


  const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));


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