import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext } from 'react';
import { CartContext, iProduct } from '../../providers/CartContext';
import { ProductsContext } from '../../providers/ProductsContext';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';

const ProductList = () => {

  const { products } = useContext(ProductsContext)
  const { filterName, setFilterName } = useContext(ProductsContext)
  const { filterCategory, setFilterCategory } = useContext(ProductsContext)

  return(
    <StyledProductList>
      {
        filterName.length == 0 && filterCategory.length == 0 ?
        products.map(item =>{
          return(
            <ProductCard key={item.id} category={item.category} id={item.id} img={item.img} name={item.name} price={item.price} />
          )
        })
        :
        <></>
      }
      {
        filterName.length > 0 ?
        filterName.map(item=>{
          return(
            <ProductCard key={item.id} category={item.category} id={item.id} img={item.img} name={item.name} price={item.price} />
            )
        })
        :
        filterCategory.map(item =>{
          return(
            <ProductCard key={item.id} category={item.category} id={item.id} img={item.img} name={item.name} price={item.price} />
            )
        })
      }
    </StyledProductList>
)}

export default ProductList;
