import React, { useEffect } from 'react'
import { Card, Button, Skeleton } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { fetchUserRequested, deleteUserRequested } from '../redux/users/actions'

function UserComponent() {
  const user = useSelector(state => state.users.currentUser) || {}
  const isActive = useSelector(state => state.spinners.isLayoutSpinnerActive)
  const dispatch = useDispatch()
  let { id } = useParams()
  let history = useHistory()
  useEffect(() => {
    dispatch(fetchUserRequested({ id }))
  }, [dispatch, id])

  const deleteUser = (id) => {
    dispatch(deleteUserRequested(id))
    history.push('/')
  }

  return (
    <>
      <Card
        style={{ width: 500, margin: '0 auto' }}
        loading={isActive}
        actions={[
          <Button onClick={() => history.push('/')}>to home</Button>,
          <Button onClick={() => history.push(`/user/${id}/edit`)}>edit</Button>,
          <Button onClick={() => deleteUser({ id })}>delete</Button>,
        ]}
      >
        <Skeleton loading={isActive} >
          <Card.Meta
            title={`${user.name} ${user.surname}`}
            description={user.desc}
          />

        </Skeleton>
      </Card>
    </>
  )
}

export default UserComponent
