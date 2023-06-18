import React, { FC } from 'react'
import { Form, Input } from 'antd'

type CustomInputProps = {
  name: string;
  placeholder: string;
  type?: string;
};

const CustomInput: FC<CustomInputProps> = ({ type = 'text', name, placeholder }) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: 'Required field' }]}
      shouldUpdate={true}
    >
      <Input
        placeholder={placeholder}
        type={type}
        size='large'
      />
    </Form.Item>
  )
}

export default CustomInput