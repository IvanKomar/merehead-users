import React from 'react'
import UsersComponent from '../components/UsersComponent'
import UsersForm from '../components/UsersForm'

const usersPage = (props) => <>
  <UsersForm />
  <UsersComponent {...props} />
</>

export default usersPage
