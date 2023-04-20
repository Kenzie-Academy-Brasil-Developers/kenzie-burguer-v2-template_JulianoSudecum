import { useForm, SubmitHandler } from 'react-hook-form';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../providers/UserContext';
import { registerFormSchema, TRegisterValues } from './RegisterFormSchema';
import { zodResolver } from "@hookform/resolvers/zod"


export interface iRegisterData{
  email: string
  name: string
  password: string
  confirm: string
}

const RegisterForm = () => {

  const { register, handleSubmit, formState: {errors}} = useForm<TRegisterValues>({
    resolver: zodResolver(registerFormSchema)
  })
  const { registerRequest } = useContext(UserContext)

  const submit: SubmitHandler<iRegisterData> =  (formData) => {
    console.log(formData)
    registerRequest(formData)
  }
  return(
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input error={errors.name?.message} placeholder='Nome' name='name' type='text' id='name' register={register}/>
      <Input error={errors.email?.message} placeholder='Email' name='email' type='email' id='email' register={register} />
      <Input error={errors.password?.message} placeholder='Senha' name='password' type='password' id='passwors' register={register} />
      <Input error={errors.confirm?.message} placeholder='Conf. Senha' name='confirm' type='password' id='confirmPassword' register={register} />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
}

export default RegisterForm;