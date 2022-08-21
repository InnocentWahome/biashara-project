import React, { useState } from "react"
import "../assets/less/ant.less"
import { PageLayout } from "../layouts"
import ProductForm from "../components/forms/ProductForm"
import { PlusOutlined } from "@ant-design/icons"
import Datagrid from "../components/shared/Datagrid"

import { Button, Drawer, Input, Space } from "antd"

const ProductsPage = () => {
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
        <Button
          type="primary"
          onClick={showDrawer}
          icon={<PlusOutlined />}
          className="mb-3"
        >
          New product
        </Button>
        <Drawer
          title="Create a new product"
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
          <ProductForm />
        </Drawer>

        <Input placeholder="Search"/>
        <p></p>

        <Datagrid />
      </section>
    </PageLayout>
  )
}

export default ProductsPage
