import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import './headerTransparent.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logout } from '../../features/auth/authSlice'

const HeaderTransparent: FC = () => {
  // const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logOutClick = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('/')
  }


  return (
    <div id='container_header'>
      <nav>
        <div className='brand'>
          <Link to={Paths.home} style={{ textDecoration: 'none' }}>
            <h2>Water Database</h2>
          </Link>
        </div>
        <ul>
          <Link to={Paths.login} style={{ textDecoration: 'none' }}>
            <li><span> Something </span></li>
          </Link>
          <li onClick={logOutClick}><span>Logout </span></li>
        </ul>
      </nav>
      <section className='sec1'></section>
      {/*<section className='sec2'></section>*/}
    </div>
  )
}

export default HeaderTransparent