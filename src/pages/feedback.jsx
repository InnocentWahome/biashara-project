import React, { useState } from "react"
import "../assets/less/ant.less"
import { PageLayout } from "../layouts"
import FeedbackForm from "../components/forms/FeedbackForm"
import { PlusOutlined } from "@ant-design/icons"
import Datagrid from "../components/shared/Datagrid"

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
} from "antd"
const { Option } = Select


const FeedbackPage = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  return (
    <PageLayout>
      <section>

        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />} className="mb-3">
          New Feedback
        </Button>
        <Drawer
          title=""
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{
            paddingBottom: 80,
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <FeedbackForm />
        </Drawer>

        <Input placeholder="Search"  className="pb-5"/>
        <Datagrid />

      </section>
    </PageLayout>
  )
}

export default FeedbackPage
