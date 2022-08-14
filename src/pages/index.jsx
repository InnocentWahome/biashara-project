import React, { useState } from "react"
import "../assets/less/ant.less"
import { PageLayout } from "../layouts"
import ProductForm from "../components/forms/ContactForm"
import { PlusOutlined } from "@ant-design/icons"
// import Datagrid from "../components/shared/Datagrid"

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

const IndexPage = () => {
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
          <p>
            wahome
          </p>
      </section>
    </PageLayout>
  )
}

export default IndexPage
