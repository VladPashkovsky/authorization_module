import React, { FC, useState } from 'react'
import SignIn from '../../components/signin/SignIn'
import LayoutEnter from '../../components/layoutEnter/LayoutEnter'
import { Paths } from '../../paths'

const Login: FC = () => {
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPassValue, setInputPassValue] = useState('')

  return (
    <LayoutEnter>
      <SignIn
        valueEmail={inputEmailValue}
        onChangeEmail={(event) => setInputEmailValue(event.target.value)}
        valuePass={inputPassValue}
        onChangePass={(event) => setInputPassValue(event.target.value)}
        linkTo={Paths.signup}
      />
    </LayoutEnter>
  )
}

export default Login