import React from 'react'
import { useAuth } from '../auth/Auth'

export const Home = () => {
    const auth = useAuth();
  return (
    <div>{auth.user.username}</div>
  )
}
