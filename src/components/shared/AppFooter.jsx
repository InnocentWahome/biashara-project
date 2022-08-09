import React from "react"
import { Row, Col, Typography } from "antd"

const { Paragraph } = Typography

const AppFooter = () => (
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col span={8}>
      <Paragraph>Privacy Policy</Paragraph>
    </Col>

    <Col span={8}>
      <Paragraph>Terms and Conditions</Paragraph>
    </Col>

    <Col span={8}>
      <Paragraph>Legal Notice</Paragraph>
    </Col>
  </Row>
)

export default AppFooter
