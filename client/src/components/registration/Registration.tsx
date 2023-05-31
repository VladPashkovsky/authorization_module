import React from 'react'
import './registration.css'

const Registration = () => {
  return (
    <div className='container_reg'>
      <div className='box'>
        {/*<div className='cover'></div>*/}
        <div className='shadow'></div>
        <div className='content_reg'>
          <div className='form'>
            <h3 className='logo_reg'><i className='fa-solid fa-key'></i></h3>
            <h2>Sign Up</h2>
            <div className='inputBox'>
              <input type='text' required />
              <i className='fa-solid fa-user'></i>
              <span>Name</span>
            </div>
            <div className='inputBox'>
              <input type='text' required />
              <i className="fa-solid fa-square-envelope"></i>
              <span>Email</span>
            </div>
            <div className='inputBox'>
              <input type='password' required />
              <i className='fa-solid fa-lock'></i>
              <span>Password</span>
            </div>
            <div className='links'>
              {/*<a href='#'> <i className='fa-solid fa-question'></i> Forgot Password</a>*/}
              <a href='#'> <i className="fa-solid fa-right-to-bracket"></i> Sing In</a>
            </div>
            <div className='inputBox'>
              <input type='submit'  value='Sing Up' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration