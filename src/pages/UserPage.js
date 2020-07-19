import React from 'react'
import UserComponent from '../components/UserComponent'
import { useLocation } from 'react-router-dom'
import EditForm from '../components/EditForm'
const UserPage = (props) => {
  let location = useLocation()

  return location.pathname.includes('edit')
    ? <EditForm {...props} />
    : < UserComponent {...props} />

}
export default UserPage
