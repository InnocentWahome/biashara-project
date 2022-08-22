import React, { useState } from "react"
import $http from "../../plugins/axios"
import moment from "moment"

import {
  Form,
  Select,
  Row,
  Col,
  Input,
  Button,
  Typography,
  Checkbox,
} from "antd"
const { Option } = Select
const { Paragraph } = Typography

const ForgotPasswordForm = () => {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="email"
              label="Please enter your email address "
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
              ]}
            >
              <Input placeholder="Please enter your email address" />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" size="large" block className="pt-2 pb-2">
          Send magic link
        </Button>
      </Form>
    </div>
  )
}

export default ForgotPasswordForm
