import { MdShoppingCart, MdLogout } from 'react-icons/md';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {

  const { modal, setModal } = useContext(CartContext)
  const navigate = useNavigate()

  const logoutFunction = () => {
    localStorage.clear()
    navigate("/")
    toast.info("Você fez logout", {autoClose:2500})
  }
  
  return(
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {
                  setModal(true)
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button onClick={logoutFunction} type='button'>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
)}

export default Header;
