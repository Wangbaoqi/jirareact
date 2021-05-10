

import React, { useRef } from 'react'
import { User } from './search-pane'

interface Project {
  id: string,
  name: string,
  personId: string,
  organization: string,
  created: string
}


interface ListProps {
  list: Project[],
  user: User[]
}

export const List = ({
  list = [],
  user
}: ListProps) => {


  return (
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{user.find(v => v.id === e.personId)?.name || 'none'}</td>
            </tr>
          ))
        }
      </tbody>

    </table>
  )
}