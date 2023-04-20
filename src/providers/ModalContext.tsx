import { createContext, useState } from "react";

export const ModalContext = createContext({} as iModalContext)

interface iModalProviderProps{
  children: React.ReactNode
}

interface iModalContext{
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  modal: boolean
}

export const ModalProvider = ({children}:iModalProviderProps) => {

  const [ modal, setModal ] = useState(false)

  return(
    <ModalContext.Provider value={{modal, setModal}}>
      {children}
    </ModalContext.Provider>
  )
}