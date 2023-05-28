import React, { FC } from 'react'
import { Layout as AntLayout } from 'antd'
import './layout.css'

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='main'>
      <AntLayout.Content style={{height: '100%'}}>
        {children}
      </AntLayout.Content>
    </div>
  )
}

export default Layout