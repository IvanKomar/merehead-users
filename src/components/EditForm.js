import React, { useEffect } from 'react'
import { Form, Input, Button, Empty, Skeleton } from 'antd'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserRequested, updateUserRequested } from '../redux/users/actions'

function EditForm() {
  const user = useSelector(state => state.users.currentUser) || {}
  const isActive = useSelector(state => state.spinners.isLayoutSpinnerActive)
  const dispatch = useDispatch()
  let { id } = useParams()
  let history = useHistory()
  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(fetchUserRequested({ id }))
    setTimeout(() => {
      form.resetFields()
    }, 500)
  }, [dispatch, form, id])

  const onFinish = values => {
    const trimValidation = Object.values(values).some(item => item.trim() === '')
    if (!trimValidation) {
      dispatch(updateUserRequested({ id, ...values }))
      form.resetFields()
      history.push(`/user/${id}`)
    }
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 8 } }
  const tailLayout = { wrapperCol: { offset: 8, span: 16 } }

  return (
    !isActive
      ? <Form
        form={form}
        style={{ margin: '30px' }}
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ ...user }}
      >
        <Skeleton loading={isActive} >

          <Form.Item
            label="name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="surname"
            name="surname"
            rules={[
              {
                required: true,
                message: 'Please input your surname!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="description"
            name="desc"
            rules={[
              {
                required: true,
                message: 'Please input your description!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => { form.resetFields() }}
            >
              reset values
        </Button>
            <Button
              onClick={() => { history.push('/') }}
            >
              Home
        </Button>
          </Form.Item>
        </Skeleton>
      </Form>
      : <Empty />
  )
}

export default EditForm