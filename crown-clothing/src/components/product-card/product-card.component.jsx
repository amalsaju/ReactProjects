import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button from '../button/button.component';

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx';


const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product))
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </ProductCardContainer>
  );

}

export default ProductCard;