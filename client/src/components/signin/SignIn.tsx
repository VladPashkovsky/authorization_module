import React, { FC } from 'react'
import './signin.css'

interface SingInProps {
  valueEmail: string,
  valuePass: string,
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onChangePass: (e: React.ChangeEvent<HTMLInputElement>) => void,
  linkTo: string | undefined
}

const SignIn: FC<SingInProps> = ({ valueEmail, onChangeEmail, valuePass, onChangePass, linkTo }) => {
  return (
    <div className='container'>
      <div className='box'>
        {/*<div className='cover'></div>*/}
        <div className='shadow'></div>
        <div className='content'>
          <div className='form'>
            <h3 className='logo'><i className='fa-solid fa-key'></i></h3>
            <h2>Sign in</h2>
            <div className='inputBox'>
              <input type='text' required value={valueEmail} onChange={onChangeEmail} />
              <i className='fa-solid fa-square-envelope'></i>
              <span>Email</span>
            </div>
            <div className='inputBox'>
              <input type='password' required value={valuePass} onChange={onChangePass} />
              <i className='fa-solid fa-lock'></i>
              <span>Password</span>
            </div>
            <div className='links'>
              <a href={linkTo}> <i className='fa-solid fa-question'></i> Forgot Password</a>
              <a href={linkTo}> <i className='fa-solid fa-user-plus'></i> Sing Up</a>
            </div>
            <div className='inputBox'>
              <input type='submit' value='Sing In' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn