import { ChangeEvent, createContext, useContext, useState } from "react";
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
  searchProducts: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ProductsProvider = ({children}: iProductsProps) =>{

  const [ filterName , setFilterName ] = useState<iProduct[]>([])
  const [ filterCategory , setFilterCategory ] = useState<iProduct[]>([])
  const [ products, setProducts ] = useState<iProduct[]>([])
  const [ valueInput , setValueInput ] = useState("")

  const productsFilterName = products.filter(item => item.name.toLowerCase().includes(valueInput.toLowerCase()))
  const productsFilterCategory = products.filter(item => item.category.toLowerCase().includes(valueInput.toLowerCase()))

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

  const searchProducts = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
    setFilterName(productsFilterName)
    setFilterCategory(productsFilterCategory)

    if(e.target.value == ""){
      setFilterCategory([])
      setFilterName([])
    }
  }
  
  return(
    <ProductsContext.Provider value={{searchProducts, products, setProducts, getProducts, filterName, setFilterName, filterCategory, setFilterCategory}}>
      {children}
    </ProductsContext.Provider>
  )
}