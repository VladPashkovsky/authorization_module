import React, { CSSProperties, FC } from 'react'
import { Button, Form } from 'antd'

type Props = {
  children: React.ReactNode,
  htmlType?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void | undefined,
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined,
  danger?: boolean | undefined,
  loading?: boolean | { delay?: number | undefined } | undefined,
  shape?: 'default' | 'circle' | 'round' | undefined,
  icon?: React.ReactNode,
  style?: CSSProperties | undefined;
}

const ButtonOne: FC<Props> = ({ children, htmlType, type, danger, loading, shape, icon, onClick, style }) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
        style={style}
      >
        {children}
      </Button>
    </Form.Item>
  )
}

export default ButtonOne