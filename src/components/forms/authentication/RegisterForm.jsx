import React, { useState } from "react"
// import { navigate } from "gatsby"
import { Link } from "gatsby"
import $http from "../../../plugins/axios"

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

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const register = async () => {
    try {
      console.log("called")
      const response = await $http.Authentication({
        method: "POST",
        url: "/register",
        data: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
          role: "User",
        },
      })
      console.log(response)
      if (response.status === 200) {
        // navigate("/authentication/login")
        console.log("Successful")
      } else {
        alert("Error", response.status)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Form
      method="POST"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        hideRequiredMark
        onFinish={register}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please enter first name",
                },
              ]}
            >
              <Input
                name="firstName"
                type="name"
                placeholder="Please enter first name"
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please enter last name",
                },
              ]}
            >
              <Input
                name="lastName"
                type="name"
                placeholder="Please enter last name"
                onChange={e => setLastName(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input email",
                },
              ]}
            >
              <Input
                name="email"
                type="email"
                placeholder="Please enter email"
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please enter phone number",
                },
              ]}
            >
              <Input
                name="phoneNumber"
                type="number"
                placeholder="Please enter phone number"
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please enter password",
                },
              ]}
            >
              <Input
                name="password"
                type="password"
                placeholder="Please enter password"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="confirm-password"
              label="Confirm Password"
              rules={[
                {
                  required: true,
                  message: "Please enter password",
                },
              ]}
            >
              <Input
                name="confirm-password"
                type="password"
                placeholder="Repeat password"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Checkbox className="pb-4">
            By signing up, you agree to our{" "}
            <a className="has-text-info"> Terms, Data Policy</a> and{" "}
            <a className="has-text-info">Cookies Policy</a>
          </Checkbox>
        </Row>

        <Button
          type="primary"
          size="large"
          htmlType="submit"
          block
          className="pt-2 pb-2"
        >
          Get Started
        </Button>
        <p className="has-text-centered pt-3">
          Already have an account? <a className="has-text-info">Sign in</a>
        </p>
      </Form>
    </div>
  )
}

export default RegisterForm
