import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

type User = {
    id: Number,
    username: string,
    access_token: string
}

const AuthContext = createContext<null|any>(null)

export const AuthProvider = ({children}:{children: any}) => {

    const [user, setUser] = useState<User|null>(null);
    const API_URL = process.env.API_URL;

    const login = async(username: string, password: string)=>{
        const response = await axios.post(`${API_URL}/auth/login`,{
            username,
            password
        })
        if(response.data.access_token){
            localStorage.setItem('user', JSON.stringify({
                id: response.data.id,
                username: username,
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token
            }));
            setUser({
                id: response.data.id,
                username: username,
                access_token: response.data.access_token,
            })
        }
    }

    const logout = ()=>{
        localStorage.removeItem('user');
        setUser(null);
    }
    
return (
    <AuthContext.Provider value={{user, login, logout, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}
