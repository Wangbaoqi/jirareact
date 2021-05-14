import { useAuth } from 'context/auth-context'
import React, { useRef } from 'react'


import { ProjectIndex } from "screens/project-list"

export const AuthenticatedApp = () => {

  const { logout } = useAuth()
  return (
    <div>
      <button onClick={() => logout()}>logout</button>
      <ProjectIndex />
    </div>
  )
}