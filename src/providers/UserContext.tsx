import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({} as iUserContext)

interface iUserContext{
  registerRequest: (formData: iUserRegister) => Promise<void>
  loginRequest: (formData: iUserLogin) => Promise<void>
}

interface iUser{
  id: string
  name: string
  email: string
}

interface iLoginRequestResponse{
  accessToken: string
  user: iUser
}

interface iUserRegister{
  name: string
  email: string
  password: string
}

interface iUserLogin{
  email: string
  password: string
}


interface iProviderProps{
  children: React.ReactNode
}

export const UserProvider = ({children}: iProviderProps) => {

  const [ user , setUser ] = useState<iUser | null>(null)
  const navigate = useNavigate()

  const registerRequest = async(formData: iUserRegister) =>{
    try {
      const { data } = await api.post<iUser>("/users", formData)
      navigate("/")
      toast.success("Usuario registrado com sucesso", {autoClose:2500})
    } catch (error) {   
      console.log(error)
    }
  }

  const loginRequest = async(formData: iUserLogin) =>{
    try {
      const {data} = await api.post<iLoginRequestResponse>("/login", formData)
      setUser(data.user)
      localStorage.setItem("@hamburguer-token", data.accessToken)
      navigate("/shop")
      toast.success("Login efetuado com sucesso", {autoClose:2500})
    } catch (error) {
      console.log(error)
    }
  }

  return(
      <UserContext.Provider value={{registerRequest, loginRequest}}>
        {children}
      </UserContext.Provider>
  )
}