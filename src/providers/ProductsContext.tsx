import { createContext, useContext, useState } from "react";
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
}

export const ProductsProvider = ({children}: iProductsProps) =>{

  const [ filterName , setFilterName ] = useState<iProduct[]>([])
  const [ filterCategory , setFilterCategory ] = useState<iProduct[]>([])

  
  return(
    <ProductsContext.Provider value={{ filterName, setFilterName, filterCategory, setFilterCategory}}>
      {children}
    </ProductsContext.Provider>
  )
}