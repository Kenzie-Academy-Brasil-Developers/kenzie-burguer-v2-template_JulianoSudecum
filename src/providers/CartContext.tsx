import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CartContext = createContext({} as iProductContext)

interface iProviderPros{
  children: React.ReactNode
}

export interface iCartProduct{
  item: iProduct
  category: string
  id: number
  img: string
  name: string
  price: number
}


export interface iProduct{
  category: string
  id: number
  img: string
  name: string
  price: number
}


interface iProductContext{
  setCartList: React.Dispatch<React.SetStateAction<iProduct[]>>
  cartList: iProduct[]
  totalValue: number
  setTotalValue: React.Dispatch<React.SetStateAction<number>>
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  modal: boolean
}

export const CartProvider = ({children}: iProviderPros) => {

  const [ cartList, setCartList ] = useState<iProduct[]>([])
  const [ totalValue, setTotalValue ] = useState<number>(0)
  const [ modal, setModal ] = useState(false)

    


  return(
    <CartContext.Provider value={{modal, setModal, cartList, setCartList, totalValue, setTotalValue}}>
      {children}
    </CartContext.Provider>
  )
}