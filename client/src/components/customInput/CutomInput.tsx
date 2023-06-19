import React, { CSSProperties, FC } from 'react'
import { Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'

type CustomInputProps = {
  name: string;
  placeholder: string;
  type?: string;
  style?: CSSProperties | undefined;
  rows?: number | undefined
};

const CustomInput: FC<CustomInputProps> = ({ type = 'text', name, placeholder, rows, style }) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: 'Required field' }]}
      shouldUpdate={true}
    >
      {/*<Input*/}
      {/*  placeholder={placeholder}*/}
      {/*  type={type}*/}
      {/*  size='large'*/}
      {/*  style={style}*/}
      {/*/>*/}
      <TextArea
        rows={rows}
        placeholder={placeholder}
        style={style}
      />
    </Form.Item>
  )
}

export default CustomInput