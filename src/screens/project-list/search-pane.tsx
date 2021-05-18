import { Input, Select } from 'antd'
import React, { useRef } from 'react'


export interface User {
  id: string,
  name: string,
  token: string
}

interface SearchProps {
  user: User[],
  param: {
    name: string,
    personId: string
  },
  setParam: (param: SearchProps['param']) => void
}

export const Search = ({
  user,
  param,
  setParam
}: SearchProps) => {



  return (
    <form>
      <div>
        <Input type="text" value={param.name} onChange={e => setParam({
          ...param,
          name: e.target.value
        })}  />

        <Select value={param.personId} onChange={value => setParam({
          ...param,
          personId: value
        })}>

          <Select.Option value="负责人">负责人</Select.Option>

          {
            user.map((e, i) => (
              <Select.Option key={i} value={e.id}>{e.name}</Select.Option>
            ))
          }
        </Select>
      </div>
    </form>
  )
}