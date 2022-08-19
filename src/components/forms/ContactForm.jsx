import React from "react"
import {
  Form,
  Select,
  Row,
  Col,
  Input,
  DatePicker,
  Button,
  Typography,
} from "antd"
const { Option } = Select
const { Paragraph } = Typography

const ContactForm = () => {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Full Names"
              rules={[
                {
                  required: true,
                  message: "Please enter user name",
                },
              ]}
            >
              <Input placeholder="Please enter your name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email address",
                },
              ]}
            >
              <Input placeholder="Please enter your email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "please enter url description",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="please enter url description"
              />
            </Form.Item>
          </Col>
        </Row>
        <Paragraph>Would you like to schedule a call back?</Paragraph>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="yesOrNo"
              label="Yes / No"
              rules={[
                {
                  required: true,
                  message: "Please choose an option",
                },
              ]}
            >
              <Select placeholder="Please choose an option">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="dateTime"
              label="DateTime"
              rules={[
                {
                  required: true,
                  message: "Please choose the dateTime",
                },
              ]}
            >
              <DatePicker.RangePicker
                style={{
                  width: "100%",
                }}
                getPopupContainer={trigger => trigger.parentElement}
              />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" size="large" block className="pt-2 pb-2">
          Send
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
