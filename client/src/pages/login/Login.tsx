import React, {FC} from 'react'
import SignIn from '../../components/signin/SignIn'
import LayoutEnter from '../../components/layoutEnter/LayoutEnter'

const Login: FC = () => {
  return (
    <LayoutEnter>
      <SignIn />
    </LayoutEnter>
  )
}

export default Login