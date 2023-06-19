import React, { CSSProperties, FC } from 'react'
import { Water } from '@prisma/client'
import { Card, Form, Space } from 'antd'
import CustomInput from '../customInput/CutomInput'
import ErrorMessage from '../errorMessage/ErrorMessage'
import ButtonOne from '../buttons/ButtonOne'

interface WaterFormProps<T> {
  onFinish: (value: T) => void,
  btnText: string,
  title: string,
  error?: string,
  water?: T,
}

const WaterForm: FC<WaterFormProps<Water>> = ({ onFinish, btnText, title, error, water }) => {
  return (
    <Card title={title} style={{ width: '30rem', opacity: 0.9,  }}>
      <Form name='water_form' onFinish={onFinish} initialValues={water}  >
        <CustomInput name='brand' placeholder='Brand' rows={1}/>
        <CustomInput name='description' placeholder='Description' rows={5} />
        <CustomInput name='details' placeholder='Details' rows={9} />
        <CustomInput name='price' placeholder='Price' rows={1} />
        <CustomInput name='imageUrl' placeholder='ImageURL' rows={1} />
        <Space>
          <ErrorMessage message={error} />
          <ButtonOne htmlType='submit' style={{background: '#1677ff', color: 'white', width: '80px'}}>
            {btnText}
          </ButtonOne>
        </Space>
      </Form>
    </Card>
  )
}

export default WaterForm