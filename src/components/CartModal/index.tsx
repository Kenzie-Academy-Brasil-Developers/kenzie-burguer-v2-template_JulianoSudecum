import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartContext';
import { ProductsContext } from '../../providers/ProductsContext';

const CartModal = () => {

  const { modal, setModal } = useContext(CartContext)
  const { products } = useContext(ProductsContext)
  const { cartList } = useContext(CartContext)

  return(
    <>
    { modal ? (
      <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {
              setModal(false)
            }}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          {
            cartList.length == 0 ? 
            <>
              <div className='emptyBox'>
                <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                  Sua sacola está vazia
                </StyledTitle>
                <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
              </div>
            </> : <CartProductList />
          }
        </div>
      </dialog>
    </StyledCartModalBox>
    ) : (
      <></>
    )
    }
    </>
)}

export default CartModal;
