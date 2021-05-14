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
        <input type="text" value={param.name} onChange={e => setParam({
          ...param,
          name: e.target.value
        })}  />

        <select value={param.personId} onChange={e => setParam({
          ...param,
          personId: e.target.value
        })}>

          <option value="">负责人</option>

          {
            user.map((e, i) => (
              <option key={i} value={e.id}>{e.name}</option>
            ))
          }
        </select>
      </div>
    </form>
  )
}