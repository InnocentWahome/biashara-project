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
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">
              2017-01-10
            </Descriptions.Item>
            <Descriptions.Item label="Effective Time">
              2017-10-10
            </Descriptions.Item>
            <Descriptions.Item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </section>
    </PageLayout>
  )
}

export default IndexPage
