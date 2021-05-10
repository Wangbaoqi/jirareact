

import React, { useRef, useState, useEffect } from 'react'
import qs from 'qs'

import {List} from './list';
import {Search} from './search-pane';

import { cleanObject, useDebounce } from '../../utils/index'


const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectIndex = () => {
    

  const [user, setUser] = useState([])

  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const [list, setList] = useState([])

  const debounceParam = useDebounce(param, 200)


  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {

      if(res.ok) {
        setList(await res.json())
      }
    })
  }, [debounceParam])


  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async res => {

      if(res.ok) {
        setUser(await res.json())
      }
    })
  }, [debounceParam])


  return (
    <div>
      <Search user={user} param={param} setParam={setParam} />
      <List user={user} list={list}/>
    </div>
  )
}