import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { iProduct } from "./CartContext";

export const ProductsContext = createContext({} as iProductsCont)

interface iProductsProps{
  children: React.ReactNode
}

interface iProductsCont{
  filterName: iProduct[]
  setFilterName: React.Dispatch<React.SetStateAction<iProduct[]>>
  filterCategory: iProduct[]
  setFilterCategory: React.Dispatch<React.SetStateAction<iProduct[]>>
  products: iProduct[]
  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>
  getProducts: () => Promise<void>
}

export const ProductsProvider = ({children}: iProductsProps) =>{

  const [ filterName , setFilterName ] = useState<iProduct[]>([])
  const [ filterCategory , setFilterCategory ] = useState<iProduct[]>([])
  const [ products, setProducts ] = useState<iProduct[]>([])


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
    <ProductsContext.Provider value={{products, setProducts, getProducts, filterName, setFilterName, filterCategory, setFilterCategory}}>
      {children}
    </ProductsContext.Provider>
  )
}