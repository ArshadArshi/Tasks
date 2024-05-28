import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const Auth = ({children}) => {
    const[user,setUser] = useState(null)
    const login = () => {
        setUser({id:'123',user:'user'})
    }

    const logout = () => {
        setUser(null)
    }
  return (
    <div>
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Auth

export const useAuth = () => useContext(AuthContext)