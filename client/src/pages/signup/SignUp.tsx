import React, { FC, useState } from 'react'
import Registration from '../../components/registration/Registration'
import LayoutEnter from '../../components/layoutEnter/LayoutEnter'
import { Paths } from '../../paths'
import { UserData, useRegisterMutation } from '../../app/services/api'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { User } from '@prisma/client'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'
import { message } from 'antd'


const SignUp: FC = () => {
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPassValue, setInputPassValue] = useState('')
  const [error, setError] = useState('')
  const { user } = useAppSelector(state => state.authReducer)
  const [newUser] = useRegisterMutation()
  const navigate = useNavigate()
  const [messageApi, contextHolderMessage] = message.useMessage()

  const errorMessage = (currentError: string) => {
    messageApi.open({
      type: 'error',
      content: currentError,
    })
  }

  const currentUserData = {
    email: inputEmailValue,
    password: inputPassValue,
    name: inputNameValue,
  }

  const sendRegisterData = async (data: UserData) => {
    try {
      await newUser(data).unwrap()
      navigate('/home')
    } catch (err) {
      const ifError = isErrorWithMessage(err)
      ifError && setError(err.data.message)
      errorMessage(error)
    }
  }

  return (
    <LayoutEnter>
      {contextHolderMessage}
      <Registration
        valueName={inputNameValue}
        onChangeName={(event) => setInputNameValue(event.target.value)}
        valueEmail={inputEmailValue}
        onChangeEmail={(event) => setInputEmailValue(event.target.value)}
        valuePass={inputPassValue}
        onChangePass={(event) => setInputPassValue(event.target.value)}
        linkTo={Paths.login}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            sendRegisterData(currentUserData)
          }
        }}
        onClick={sendRegisterData}
      />
    </LayoutEnter>
  )
}

export default SignUp