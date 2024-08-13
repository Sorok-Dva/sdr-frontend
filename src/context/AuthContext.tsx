import React, { createContext, ReactNode, useContext, useState } from 'react'

interface AuthContextType {
  token : string | null;
  setToken : (token : string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  
  return (
    <AuthContext.Provider value={ { token, setToken } }>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () : AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
