import React, { useState } from "react"
import "../assets/less/ant.less"
import { PageLayout } from "../layouts"
import OrderForm from "../components/forms/OrderForm"
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

const OrdersPage = () => {
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

        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />} className="mb-3">
          New order
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
          <OrderForm />
        </Drawer>

        <Input placeholder="Search"  className="pb-5"/>
        <Datagrid />
      </section>
    </PageLayout>
  )
}

export default OrdersPage
