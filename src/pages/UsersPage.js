import React from 'react'
import { UsersComponent, UsersForm } from '../components'

const usersPage = (props) => <>
  <UsersForm />
  <UsersComponent {...props} />
</>

export default usersPage
