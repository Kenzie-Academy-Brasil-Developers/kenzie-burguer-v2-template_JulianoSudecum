import { UseFormRegister } from 'react-hook-form';
import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { iLoginData } from '../LoginForm';
import { iRegisterData } from '../RegisterForm';

interface iInputProps{
  error?: string
  placeholder:string
  id: string
  register: UseFormRegister<iLoginData | iRegisterData>
  type: string
  name: "email" | "password" | "name" | "confirm"
}

const Input = ({error, placeholder, id, register, type , name }: iInputProps) => (
  <div>
    <StyledInputContainer>
      <input type={type} id={id} placeholder=' ' {...register(name)}/>
      <label htmlFor={id}>{placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}</label>
    </StyledInputContainer>
    <StyledParagraph fontColor='red'>{error}</StyledParagraph>
  </div>
);

export default Input;
