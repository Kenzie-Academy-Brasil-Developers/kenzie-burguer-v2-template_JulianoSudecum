import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext, iProduct } from '../../../../providers/CartContext';
import { useContext } from 'react';

const CartProductCard = ({img, name, id, price}:iProduct) => {

  const { cartList , setCartList } = useContext(CartContext)
  const { totalValue , setTotalValue } = useContext(CartContext)

  const removeCartItem = () => {
    const newCartList = cartList.filter(cartItem => id !== cartItem.id)
    setCartList(newCartList)
    setTotalValue(totalValue - price)
  }

  return(
    <StyledCartProductCard key={id}>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <button onClick={removeCartItem} type='button' aria-label='Remover'>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
)}

export default CartProductCard;
