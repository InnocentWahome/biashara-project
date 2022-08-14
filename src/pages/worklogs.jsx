import React, { useState } from "react"
import "../assets/less/ant.less"
import { PageLayout } from "../layouts"
import WorkLogForm from "../components/forms/WorkLogForm"
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

const WorkLogsPage = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra)
  }
  return (
    <PageLayout>
      <section>

        <Button
          type="primary"
          onClick={showDrawer}
          icon={<PlusOutlined />}
          className="mb-3"
        >
          New work log
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
          <WorkLogForm />
        </Drawer>

        <Input placeholder="Search" className="pb-3" /><br />

        <Datagrid />
      </section>
    </PageLayout>
  )
}

export default WorkLogsPage
