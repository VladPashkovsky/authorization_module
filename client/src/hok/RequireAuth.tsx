import React, { FC, JSX, useEffect } from 'react'
import { useLocation, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useAppSelector} from '../app/hooks'
// import { selectIsAuth, selectUser } from '../features/auth/authSlice'

interface RequireAuthProps {
  children: JSX.Element
}

const RequireAuth: FC<RequireAuthProps> = ({children}) => {
  const location = useLocation()
  // const user = useSelector(selectUser)
  // const user = useAppSelector(selectUser)
  const {user} = useAppSelector(state => state.authReducer)
  const navigate = useNavigate()

  if (!user) {
    // return <Navigate to='/' state={{from: children}} />
    return <Navigate to='/' state={{from: location}} />
  }


  return (
    <>
      {children}
    </>
  )
}

export default RequireAuth