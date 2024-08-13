import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useError } from './ErrorContext'
import useApi from '../hooks/useApi'

export interface User {
  id : number;
  email : string;
  nickname : string;
  avatar : string;
  roleId : number;
  isAdmin : boolean;
}

interface UserContextType {
  user : User | null;
  setUser : (user : User | null) => void;
  logout : () => void;
  login : (user : User, token : string) => void;
  isAdmin : boolean;
  navigateTo : (path : string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
  console.log('Initializing UserProvider')
 
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()
  const [stopRequest, setStopRequest] = useState(false)
  const { setServerError } = useError()
  const callApi = useApi()
 
  const navigateTo = (path : string) => {
    navigate(path)
  }
 
  useEffect(() => {
    const token = localStorage.getItem('token')
  
    if (token && !user && !stopRequest) {
      callApi('/api/users/me', {
        headers: {
          Authorization: `Bearer ${ token }`,
        },
      })
        .then((data) => {
          setUser(data)
        })
        .catch((err) => {
          setServerError(err)
          setUser(null)
          setStopRequest(true)
        })
    }
  }, [setServerError, user, callApi, stopRequest])
 
  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    navigateTo('/')
  }
 
  const login = (user : User, token : string) => {
    setUser(user)
    localStorage.setItem('token', token)
    navigateTo('/')
  }
 
  const isAdmin = user?.roleId === 1
 
  return (
    <UserContext.Provider value={ { user, setUser, logout, login, isAdmin, navigateTo } }>
      { children }
    </UserContext.Provider>
  )
}

export const useUser = () : UserContextType => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
