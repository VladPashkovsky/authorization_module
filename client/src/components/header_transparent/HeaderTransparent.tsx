import React from 'react'
import './headerTransparent.css'

const HeaderTransparent = () => {
  return (
    <div className='container_header'>
      <nav>
        <div className='brand'>
          <h2>Water Database</h2>
        </div>
        <ul>
          <li> <a href='#'>Something</a> </li>
          <li> <a href='#'>Logout</a> </li>
        </ul>
      </nav>
      <section className='sec1'></section>
      <section className='sec2'></section>
    </div>
  )
}

export default HeaderTransparent