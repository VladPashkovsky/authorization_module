import React, { FC } from 'react'
import {Link} from 'react-router-dom'
import { Paths } from '../../paths'
import './headerTransparent.css'

const HeaderTransparent: FC = () => {
  return (
    <div className='container_header'>
      <nav>
        <div className='brand'>
          <Link to={Paths.home} style={{textDecoration: 'none'}}>
            <h2>Water Database</h2>
          </Link>
        </div>
        <ul>
          <Link to={Paths.login} style={{textDecoration: 'none'}}>
            <li> <a href='#'>Something</a> </li>
          </Link>
          <Link to={Paths.login} style={{textDecoration: 'none'}}>
            <li> <a href='#'>Logout</a> </li>
          </Link>
        </ul>
      </nav>
      <section className='sec1'></section>
      {/*<section className='sec2'></section>*/}
    </div>
  )
}

export default HeaderTransparent