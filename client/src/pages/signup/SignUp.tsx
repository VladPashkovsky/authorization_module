import React, { FC, useState } from 'react'
import Registration from '../../components/registration/Registration'
import LayoutEnter from '../../components/layoutEnter/LayoutEnter'
import { Paths } from '../../paths'
import NotificationEnter from '../../components/notificationEnter/NotificationEnter'

const SignUp: FC = () => {
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPassValue, setInputPassValue] = useState('')

  return (
    <LayoutEnter>
      <Registration
        valueName={inputNameValue}
        onChangeName={(event) => setInputNameValue(event.target.value)}
        valueEmail={inputEmailValue}
        onChangeEmail={(event) => setInputEmailValue(event.target.value)}
        valuePass={inputPassValue}
        onChangePass={(event) => setInputPassValue(event.target.value)}
        linkTo={Paths.login}
      />
      <NotificationEnter  />
    </LayoutEnter>
  )
}

export default SignUp