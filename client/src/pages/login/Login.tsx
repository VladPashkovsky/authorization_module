import React, { FC, lazy, useState, Suspense, useEffect } from 'react'
import SignIn from '../../components/signin/SignIn'
import LayoutEnter from '../../components/layoutEnter/LayoutEnter'
import { Paths } from '../../paths'
import { UserData, useLoginMutation} from '../../app/services/api'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'
import { Button,  notification } from 'antd';
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
        onClick={sendLoginData}
      />
      <ErrorMessage message={error}/>
    </LayoutEnter>
  )
}

export default Login