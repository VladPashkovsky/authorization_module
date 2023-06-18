import React, { FC } from 'react'
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
  water?: T
}

const WaterForm: FC<WaterFormProps<Water>> = ({ onFinish, btnText, title, error, water }) => {
  return (
    <Card title={title} style={{ width: '30rem', opacity: 0.9 }}>
      <Form name='water_form' onFinish={onFinish} initialValues={water} >
        <CustomInput name='brand' placeholder='Brand' />
        <CustomInput name='description' placeholder='Description' />
        <CustomInput name='details' placeholder='Details' />
        <CustomInput name='price' placeholder='Price' />
        <CustomInput name='imageUrl' placeholder='ImageURL' />
        <Space>
          <ErrorMessage message={error} />
          <ButtonOne htmlType='submit'>
            {btnText}
          </ButtonOne>
        </Space>
      </Form>
    </Card>
  )
}

export default WaterForm