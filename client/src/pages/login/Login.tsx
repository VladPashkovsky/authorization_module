import React, { FC, useState } from 'react'
import SignIn from '../../components/signin/SignIn'
import LayoutEnter from '../../components/layoutEnter/LayoutEnter'
import { Paths } from '../../paths'
import { UserData, useLoginMutation} from '../../app/services/api'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

const Login: FC = () => {
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPassValue, setInputPassValue] = useState('')
  const [error, setError] = useState('')
  const [sendLoginUser, loginUserResult] = useLoginMutation()

  const sendLoginData = async (data: UserData) => {
    try {
      await sendLoginUser(data).unwrap()
    } catch (err) {
      const ifError = isErrorWithMessage(err)
      ifError ? setError(err.data.message) : setError('Unknown error')
    }
  }

  return (
    <LayoutEnter>
      <SignIn
        valueEmail={inputEmailValue}
        onChangeEmail={(event) => setInputEmailValue(event.target.value)}
        valuePass={inputPassValue}
        onChangePass={(event) => setInputPassValue(event.target.value)}
        linkTo={Paths.signup}
        onClick={sendLoginData}
      />
    </LayoutEnter>
  )
}

export default Login