import React from "react"
import {
  //  AppFooter,
  Navbar,
} from "../components"
import { Breadcrumb, Layout } from "antd"

const { Header, Content, Footer } = Layout

const App = ({ children }) => (
  <Layout
    className="layout"
    style={{
      height: "100vh",
    }}
  >
    <Header
      style={{
        backgroundColor: "#4f4b40",
      }}
    >
      <div className="logo" />
      <Navbar />
    </Header>
    <Content
      style={{
        padding: "0 50px",
        width: "100%",
        backgroundColor: "#9a8e9e",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>
          <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>ThisPage</Breadcrumb.Item>
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
