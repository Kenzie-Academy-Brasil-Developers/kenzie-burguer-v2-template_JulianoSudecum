import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext, iCartProduct, iProduct } from '../../../providers/CartContext';
import { useContext, useState } from 'react';


const ProductCard = ({id, name, price, category, img}: iProduct) => {

  const { cartList, setCartList } = useContext(CartContext)
  const { totalValue, setTotalValue } = useContext(CartContext)

  const data = {
    id: id,
    name: name,
    price: price,
    category: category,
    img: img
  }

  const addCartList = () =>{
    setCartList([...cartList, data])
    setTotalValue(totalValue + data.price)
  }

  return(
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>R${price}</StyledParagraph>
        <StyledButton onClick={addCartList} $buttonSize='medium' $buttonStyle='green'>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
)}

export default ProductCard;
