import { useAuth } from 'context/auth-context';
import { stringify } from 'qs';
import React, { FormEvent, useRef } from 'react'

const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreen = () => {

  const { register, user } = useAuth();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    console.log(evt);
    evt.preventDefault()
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    register({username, password})
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

      <button type="submit">register</button>
    </form>
  )
}