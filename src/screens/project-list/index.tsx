

import React, { useRef, useState, useEffect } from 'react'
import qs from 'qs'

import {List} from './list';
import {Search} from './search-pane';

import { cleanObject, useDebounce } from '../../utils/index'
import { useHttp } from 'utils/http';


const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectIndex = () => {
    

  const [user, setUser] = useState([])

  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const [list, setList] = useState([])

  const client = useHttp()


  const debounceParam = useDebounce(param, 200)

 

  useEffect(() => {

    client('projects', {
      data: cleanObject(debounceParam)
    }).then(setList)

    // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {

    //   if(res.ok) {
    //     setList(await res.json())
    //   }
    // })
  }, [debounceParam])


  useEffect(() => {

    client('users').then(setUser)
    
  }, [debounceParam])


  return (
    <div>
      <Search user={user} param={param} setParam={setParam} />
      <List user={user} list={list}/>
    </div>
  )
}