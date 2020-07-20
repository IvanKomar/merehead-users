import React from 'react'
import { useLocation } from 'react-router-dom'
import { EditForm, UserComponent } from '../components'
const UserPage = (props) => {
  let location = useLocation()

  return location.pathname.includes('edit')
    ? <EditForm {...props} />
    : < UserComponent {...props} />

}
export default UserPage
