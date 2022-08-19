import React, { useState } from "react"
// import { navigate } from "gatsby"
import $http from "../../../plugins/axios"

import { Form, Col, Input, Button } from "antd"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const login = async () => {
    try {
      const response = await $http.Authentication({
        method: "POST",
        url: "/login",
        data: {
          email: email,
          password: password,
        },
      })
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data?.data?.token)
        // navigate("/")
      } else {
        alert("Error", response.status)
      }
    } catch (error) {
      console.error("wahome", error)
    }
  }
  return (
    <div>
      <Form
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        hideRequiredMark
        method="POST"
        onFinish={login}
      >
        <Col>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter email",
              },
            ]}
          >
            <Input
              placeholder="Please enter user name"
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name="password"
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
              name="password"
              placeholder="Please enter password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
          className="pt-2 pb-2"
        >
          Login
        </Button>
        <p className="has-text-centered pt-3">
          <a href="/">Forgot Password</a>
        </p>
      </Form>
    </div>
  )
}

export default LoginForm
