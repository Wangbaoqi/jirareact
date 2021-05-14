import { useAuth } from 'context/auth-context';
import { stringify } from 'qs';
import React, { FormEvent, useRef } from 'react'

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {

  const { login, user } = useAuth();

  const handleLogin = (param: {username: string, password: string}) => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(param)
    }).then(async res => {

      if(res.ok) {
      }
    })
  }


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    console.log(evt);
    evt.preventDefault()
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    login({username, password})
  }

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">UserName</label>
        <input type="text" id='username' />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' />
      </div>

      <button type="submit">submit</button>
    </form>
  )
}