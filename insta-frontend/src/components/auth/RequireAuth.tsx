import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "./Auth"
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({children}:{children: ReactNode}) => {

    const location = useLocation();
    const auth = useAuth();
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    
    useEffect(()=>{
        const userExists = localStorage.getItem('user');
        if(userExists){
            const {id, username, access_token} = JSON.parse(userExists);
            auth.setUser({
                id: id,
                username: username,
                access_token: access_token,
            })
        }
        setIsAuthChecked(true)
    },[])

    if (!isAuthChecked) {
        // Optionally render a loading spinner or some placeholder content
        return <div>Loading...</div>;
    }

    if(!auth.user){
        return <Navigate to="/login" state={{path: location.pathname}}/>
    }
    console.log('sdf')
    return children;
}
