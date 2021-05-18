import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';
import { stringify } from 'qs';
import React, { FormEvent, useRef } from 'react'
import { LongButton } from 'unAuthenticated-app';

const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreen = () => {

  const { register, user } = useAuth();

  const handleSubmit = (values:  {username: string, password: string}) => {
    register(values)
  }

  return (

    <Form onFinish={handleSubmit} >
      <Form.Item name={'username'} rules={[{required: true, message: 'please input name'}]}>
        <Input placeholder={'username'} type="text" id={'username'} />
      </Form.Item>
      <Form.Item name={'password'} rules={[{required: true, message: 'please Input name'}]}>
        <Input placeholder={'password'} type="password" id={'password'} />
      </Form.Item>
      <Form.Item > 
        <LongButton htmlType={'submit'} type={'primary'}>register</LongButton>
      </Form.Item>
    </Form>
    
  )
}