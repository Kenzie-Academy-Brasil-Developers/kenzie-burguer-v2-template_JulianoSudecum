import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContext';
import { toast } from 'react-toastify';

const CartProductList = () => {

  const { totalValue, setTotalValue} = useContext(CartContext)
  const { cartList, setCartList } = useContext(CartContext)

  const clearCart = () =>{
    setCartList([])
    setTotalValue(0)
    toast.info("Carrinho limpado com suceeso", {autoClose:2000})
  }

  return(
    <StyledCartProductList>
      <ul>
        {
          cartList.map(item => <CartProductCard key={item.id} img={item.img} name={item.name} category={item.category} id={item.id} price={item.price} />)
        }
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ {totalValue.toFixed(2)}</StyledParagraph>
      </div>
      <StyledButton onClick={clearCart} $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
)}
export default CartProductList;
