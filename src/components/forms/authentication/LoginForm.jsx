import React from "react"
import {
  Form,
  Select,
  Row,
  Col,
  Input,
  DatePicker,
  Button,
  Checkbox,
} from "antd"
const { Option } = Select

const LoginForm = () => {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
          <Col>
            <Form.Item
              name="name"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter email",
                },
              ]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="url"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        <Button type="primary" size="large" block className="pt-2 pb-2">
          Login
        </Button>
        <p className="has-text-centered pt-3">
          <a>Forgot Password</a>
        </p>
      </Form>
    </div>
  )
}

export default LoginForm
