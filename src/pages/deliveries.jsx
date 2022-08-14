import React, { useState } from "react"
import "../assets/less/ant.less"
import { PageLayout } from "../layouts"
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

const DeliveriesPage = () => {
  return (
    <PageLayout>
      <section>


        <Input placeholder="Search" className="pb-3" /><br />
        <Datagrid />
      </section>
    </PageLayout>
  )
}

export default DeliveriesPage
