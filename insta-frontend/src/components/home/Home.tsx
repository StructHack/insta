
import { useEffect } from 'react';
import { useAuth } from '../auth/Auth'
import axiosInstance from '../auth/AxiosInstance';

export const Home = () => {
    const auth = useAuth();

    useEffect(()=>{
      axiosInstance.get('/users')
    })

  return (
    <div>{auth.user.username}</div>
  )
}
