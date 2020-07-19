import React from 'react'
import { Form, Input, Button, } from 'antd'
import { useDispatch } from 'react-redux'
import { postUserRequested } from '../redux/users/actions'

function UsersForm() {
  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 8 } }
  const tailLayout = { wrapperCol: { offset: 8, span: 16 } }
  const [form] = Form.useForm();

  const dispatch = useDispatch()
  const onFinish = values => {
    const trimValidation = Object.values(values).some(item => item.trim() === '')
    if (!trimValidation) {
      dispatch(postUserRequested(values))
      form.resetFields()
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      form={form}
      style={{ margin: '30px' }}
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
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
          reset
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UsersForm