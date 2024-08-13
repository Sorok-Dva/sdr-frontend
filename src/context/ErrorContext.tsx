import React, { createContext, ReactNode, useContext, useState } from 'react'

interface ErrorContextType {
  serverError : boolean;
  setServerError : (error : boolean) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined)

export const ErrorProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
  const [serverError, setServerError] = useState(false)
  
  return (
    <ErrorContext.Provider value={ { serverError, setServerError } }>
      { children }
    </ErrorContext.Provider>
  )
}


export const useError = () => {
  const context = useContext(ErrorContext)
  if (context === undefined) {
    throw new Error('useError must be used within an ErrorProvider')
  }
  return context
}
