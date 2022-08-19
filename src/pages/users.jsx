import React, { useState } from "react"
import "../assets/less/ant.less"
import { PageLayout } from "../layouts"
import UsersForm from "../components/forms/UsersForm"
import { PlusOutlined } from "@ant-design/icons"
import Datagrid from "../components/shared/Datagrid"

import { Button, Drawer, Input, Space } from "antd"
const UsersPage = () => {
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
          New user
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
          <UsersForm />
        </Drawer>

        <Input placeholder="Search" className="pb-5" />

        <Datagrid />
      </section>
    </PageLayout>
  )
}

export default UsersPage
