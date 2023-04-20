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
  products: iProduct[]
  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>
  getProducts: () => Promise<void>
  setCartList: React.Dispatch<React.SetStateAction<iProduct[]>>
  cartList: iProduct[]
  totalValue: number
  setTotalValue: React.Dispatch<React.SetStateAction<number>>
}

export const CartProvider = ({children}: iProviderPros) => {

  const [ products, setProducts ] = useState<iProduct[]>([])
  const [ cartList, setCartList ] = useState<iProduct[]>([])
  const [ totalValue, setTotalValue ] = useState<number>(0)

    const getProducts = async () =>{
      const token = localStorage.getItem("@hamburguer-token")
      try {
        const {data} = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    


  return(
    <CartContext.Provider value={{products, setProducts, getProducts, cartList, setCartList, totalValue, setTotalValue}}>
      {children}
    </CartContext.Provider>
  )
}