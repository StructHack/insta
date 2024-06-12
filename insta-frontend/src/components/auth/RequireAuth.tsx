import { ReactNode } from "react";
import { useAuth } from "./Auth"
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({children}:{children: ReactNode}) => {
    const location = useLocation();
    const auth = useAuth();
    console.log(auth.user)
    if(!auth.user){
        return <Navigate to="/login" state={{path: location.pathname}}/>
    }
    console.log('sdf')
    return children;
}
