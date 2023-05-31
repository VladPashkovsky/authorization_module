import React, { FC } from 'react'
import { Layout as AntLayout } from 'antd'
// import './layout.css'
import Header from '../header/Header'
import HeaderTransparent from '../header_transparent/HeaderTransparent'

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>


    </>
    // <div className='main'>
    //   <Header />
    //   <AntLayout.Content style={{height: '100%'}}>
    //     {children}
    //   </AntLayout.Content>
    // </div>
  )
}

export default Layout