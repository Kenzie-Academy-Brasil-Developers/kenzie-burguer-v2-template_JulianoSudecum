import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../providers/CartContext';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../providers/ProductsContext';

const ShopPage = () => {

  const { getProducts } = useContext(ProductsContext)
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("@hamburguer-token")
    if(!token){
      navigate("/")
    }else if(token){
      getProducts()
    }
  },[])

  return(
    <StyledShopPage>
      <CartModal />
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
)}

export default ShopPage;
