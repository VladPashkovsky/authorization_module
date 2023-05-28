import React, {FC} from 'react'
import { Layout, Space, Typography, Button } from 'antd'
import {FieldTimeOutlined} from '@ant-design/icons'
import './header.css'

const Header: FC = () => {
  return (
    <Layout.Header>
      <Space>
        <FieldTimeOutlined className='teamIcon'/>
        <Button type='link'>Click</Button>
      </Space>
    </Layout.Header>
  )
}

export default Header