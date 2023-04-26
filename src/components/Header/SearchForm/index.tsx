import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { ChangeEvent, useContext, useState } from 'react';
import { ProductsContext } from '../../../providers/ProductsContext';

const SearchForm = () => {

  const { products } = useContext(ProductsContext)
  const { filterName, setFilterName } = useContext(ProductsContext)
  const { filterCategory, setFilterCategory } = useContext(ProductsContext)

  const [ valueInput , setValueInput ] = useState("")

  const productsFilterName = products.filter(item => item.name.toLowerCase().includes(valueInput.toLowerCase()))
  const productsFilterCategory = products.filter(item => item.category.toLowerCase().includes(valueInput.toLowerCase()))

  const functionTeste = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
    setFilterName(productsFilterName)
    setFilterCategory(productsFilterCategory)

    if(e.target.value == ""){
      setFilterCategory([])
      setFilterName([])
    }
  }
  
  

  return(
    <StyledSearchForm>
      <input onChange={(e) => functionTeste(e)} type='text' placeholder='Digitar pesquisa' />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
)}

export default SearchForm;
