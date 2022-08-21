import React from "react"
import "../assets/less/ant.less"
import { PageLayout } from "../layouts"
import Datagrid from "../components/shared/Datagrid"
import { Input } from "antd"

const DeliveriesPage = () => {
  return (
    <PageLayout>
      <section>
        <Input placeholder="Search"/>
        <p></p>
        <Datagrid />
      </section>
    </PageLayout>
  )
}

export default DeliveriesPage
