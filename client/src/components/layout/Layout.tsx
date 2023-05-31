import React, { FC } from 'react'
import './layout.css'
import HeaderTransparent from '../header_transparent/HeaderTransparent'

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='container_layout'>
      <HeaderTransparent />
      {children}
    </div>
  )
}

export default Layout