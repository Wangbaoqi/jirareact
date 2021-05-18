

import { Table } from 'antd'
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
    <Table pagination={false} columns={[{
      title: 'name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name)
    }, {
      title: 'charge',
      render(value, project) {
        return (
          <span>
            {user.find(v => v.id === project.personId)?.name || 'none'}
          </span>
        )
      }
    }]} dataSource={list}>

    </Table>
  )
}