import React from "react"
import {
  //  AppFooter,
  Navbar,
} from "../components"
import {
  Breadcrumb,
  Layout,
  // Menu
} from "antd"

const { Header, Content, Footer } = Layout

const App = ({ children }) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Navbar />
    </Header>
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      {/* <AppFooter /> */}
    </Footer>
  </Layout>
)

export default App
