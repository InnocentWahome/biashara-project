import React from "react"
import { Layout, Breadcrumb } from "antd"
import { AppFooter, Navbar } from "../components"

const { Header, Content, Footer } = Layout

const PageLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Navbar />
      </Header>

      <Content style={{ padding: "5px 50px" }}>
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <main className="site-layout-content">{children}</main>
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <AppFooter />
      </Footer>
    </Layout>
  )
}

export default PageLayout
