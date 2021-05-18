import { useAuth } from 'context/auth-context';
import { stringify } from 'qs';
import React, { FormEvent, useRef } from 'react'
import { Button, Form, Input} from 'antd'
import { LongButton } from 'unAuthenticated-app';

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
 
  const { login, user } = useAuth();


  const handleSubmit = (values:  {username: string, password: string}) => {
    login(values)
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
        <LongButton htmlType={'submit'} type={'primary'}>login</LongButton>
      </Form.Item>
    </Form>
  )
}