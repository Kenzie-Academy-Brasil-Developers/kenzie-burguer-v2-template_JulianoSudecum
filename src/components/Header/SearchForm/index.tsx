import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { ChangeEvent, useContext, useState } from 'react';
import { ProductsContext } from '../../../providers/ProductsContext';

const SearchForm = () => {

  const { searchProducts } = useContext(ProductsContext)
  
  return(
    <StyledSearchForm>
      <input onChange={(e) => searchProducts(e)} type='text' placeholder='Digitar pesquisa' />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
)}

export default SearchForm;
