import React, { FC, JSX } from 'react'
import { useCurrentQuery } from '../app/services/api'

interface AuthProviderProps {
  children: JSX.Element
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { isLoading } = useCurrentQuery()
  // if (isLoading) {
  //   return <span>Loading...</span>
  // }

  return (
    children
  )
}

export default AuthProvider