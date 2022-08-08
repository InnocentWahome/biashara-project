import React, { useState } from "react"
import ContactForm from "../components/forms/ContactForm"
import ContactFormImage from "../assets/icons/contact.svg"
import "../assets/less/ant.less"
import { PageLayout } from "../layouts"
import { PlusOutlined } from "@ant-design/icons"
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  PageHeader,
  Descriptions,
  Statistic,
  Image,
} from "antd"

const ContactPage = () => {
  return (
    <PageLayout>
      <section>
        <Row gutter={100}>
          <Col span={12}>
            <ContactForm />
          </Col>
          <Col span={12}>
            <Image width={500} src={ContactFormImage} />
          </Col>
        </Row>
      </section>
    </PageLayout>
  )
}

export default ContactPage
