import React, { FC, useState, useEffect } from 'react'
import SignIn from '../../components/signin/SignIn'
import LayoutEnter from '../../components/layoutEnter/LayoutEnter'
import { Paths } from '../../paths'
import { useLoginMutation, UserDataLogin } from '../../app/services/api'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import ErrorMessage from '../../components/errorMessage/ErrorMessage'


const Login: FC = () => {
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPassValue, setInputPassValue] = useState('')
  const [error, setError] = useState('')
  const [sendLoginUser, loginUserResult] = useLoginMutation()

  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    const openNotification = (placement: NotificationPlacement) => {
      api.open({
        message: 'Notification:',
        description:` 
          Sign in or Sign up as a new user.
          Email: admin@admin.com
          Password: 123456789`,
        placement: 'topLeft',
        className: 'custom-class',
        duration: 20,
        style: {
          animationDelay: '1.5s',
          width: 300,
          textAlign: 'center',
          whiteSpace: 'pre-line',
          fontWeight: 'bold',
          borderRadius: 10,
        },
      });
    };
    openNotification('topLeft')
  }, [])

  const currentUserData = {
    email: inputEmailValue,
    password: inputPassValue,
}

  const sendLoginData = async (data: UserDataLogin) => {
    try {
      await sendLoginUser(currentUserData).unwrap()
    } catch (err) {
      const ifError = isErrorWithMessage(err)
      ifError ? setError(err.data.message) : setError('Unknown error')
    }
  }


  return (
    <LayoutEnter>
      {contextHolder}
      {/*<Button type="primary" onClick={openNotification}>*/}
      {/*  Open the notification box*/}
      {/*</Button>*/}
      <SignIn
        valueEmail={inputEmailValue}
        onChangeEmail={(event) => setInputEmailValue(event.target.value)}
        valuePass={inputPassValue}
        onChangePass={(event) => setInputPassValue(event.target.value)}
        linkTo={Paths.signup}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            sendLoginData(currentUserData)
          }
        }}
        onClick={sendLoginData}
      />
      <ErrorMessage message={error}/>
    </LayoutEnter>
  )
}

export default Login