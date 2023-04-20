import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { loginFormSchema, TLoginFormValues } from './LoginFormSchema';
import { zodResolver } from "@hookform/resolvers/zod"


export interface iLoginData{
  email: string
  password: string
  name?: string
  confirm?: string
}

const LoginForm = () => {

  const { register, handleSubmit, formState: { errors },} = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema)
  })
  const { loginRequest } = useContext(UserContext)
  
  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    loginRequest(formData)
  }

  return(
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input error={errors.email?.message} placeholder='Email' name='email' type='email' id='login' register={register} />
      <Input error={errors.password?.message} placeholder='Senha' name='password' type='password' id='senha' register={register} />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )
}

export default LoginForm;
