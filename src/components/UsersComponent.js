import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchUsersRequested, deleteUserRequested } from '../redux/users/actions'
import { List, Button } from 'antd'

export default function UsersComponent() {
  const isActive = useSelector(state => state.spinners.isLayoutSpinnerActive)
  const users = useSelector(state => state.users.users)
  const [page, setPage] = useState(1)
  let history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersRequested())
  }, [dispatch])

  const deleteUser = (user) => {
    dispatch(deleteUserRequested(user))
  }
  const showUser = (user) => {
    history.push(`user/${user.id}`)
  }
  const editUser = (user) => {
    history.push(`user/${user.id}/edit`)
  }

  return (!isActive) &&
    <List
      bordered
      pagination={{
        onChange: page => {
          setPage(page)
        },
        pageSize: 5,
        current: page
      }}
      dataSource={users}
      renderItem={
        user =>
          <List.Item
            actions={[
              <Button type="text" onClick={() => showUser(user)} key={`btn-s${user.id}`}>show</Button>,
              <Button type="text" onClick={() => editUser(user)} key={`btn-e${user.id}`}>edit</Button>,
              <Button type="text" onClick={() => deleteUser(user)} key={`btn-d${user.id}`}>delete</Button>,
            ]}
            rowkey={user.id}
          >
            <List.Item.Meta
              title={`${user.name} ${user.surname}`}
              description={user.desc}
            />
          </List.Item>
      }
    />
}
