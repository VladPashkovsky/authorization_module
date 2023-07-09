import React, { FC, useState } from 'react'
import Registration from '../../components/registration/Registration'
import LayoutEnter from '../../components/layoutEnter/LayoutEnter'
import { Paths } from '../../paths'
import { UserData, useRegisterMutation } from '../../app/services/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { User } from '@prisma/client'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'
import { message } from 'antd'
import { useTransition, animated } from 'react-spring'


const SignUp: FC = () => {
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPassValue, setInputPassValue] = useState('')
  const [isDisabled, setDisabled] = useState(false)
  const [error, setError] = useState('')
  const [newUser] = useRegisterMutation()
  const navigate = useNavigate()
  const location = useLocation()
  const [messageApi, contextHolderMessage] = message.useMessage()
  const [messageRegApi, contextHolderRegMessage] = message.useMessage()

  const errorMessage = (currentError: string) => {
    messageApi.open({
      type: 'error',
      content: currentError,
    })
  }

  const addedNotification = () => {
    messageRegApi.open({
      content: 'DONE! Sign In, please',
      className: 'custom-class',
      duration: 4,
    })
  }

  const navigateBack = () => {
    navigate('/')
  }

  const showNotification = () => {
    setTimeout(addedNotification, 1000)
    setTimeout(navigateBack, 3000)
  }

  const currentUserData = {
    email: inputEmailValue,
    password: inputPassValue,
    name: inputNameValue,
  }

  const sendRegisterData = async (data: UserData) => {
    try {
      await newUser(currentUserData).unwrap()
      setDisabled(true)
      showNotification()
    } catch (err) {
      const ifError = isErrorWithMessage(err)
      ifError && setError(err.data.message)
      errorMessage(error)
    }
  }

  // const transitions = useTransition(location, {
  //   from: { opacity: 0, transform: 'translateX(100%)' },
  //   enter: { opacity: 1, transform: 'translateX(0%)' },
  //   leave: { opacity: 0, transform: 'translateX(-100%)' },
  //   config: { duration: 500 },
  // })

  return (
    <LayoutEnter>
      {contextHolderRegMessage}
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
          disabled={isDisabled}
        />
    </LayoutEnter>
  )
}

export default SignUp