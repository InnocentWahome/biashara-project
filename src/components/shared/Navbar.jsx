import React from "react"
import { Menu } from "antd"
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons"

import { Link } from "gatsby"

const Navbar = () => {
  const menuItems = [
    {
      key: "home",
      icon: <AppstoreOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "products",
      icon: <MailOutlined />,
      label: <Link to="/products">Products</Link>,
    },
    {
      key: "orders",
      icon: <SettingOutlined />,
      label: <Link to="/orders">Orders</Link>,
    },
    {
      key: "deliveries",
      icon: <AppstoreOutlined />,
      label: <Link to="/deliveries">Deliveries</Link>,
    },
    {
      key: "users",
      icon: <MailOutlined />,
      label: <Link to="/users">Users</Link>,
    },
    {
      key: "worklogs",
      icon: <SettingOutlined />,
      label: <Link to="/worklogs">Worklogs</Link>,
    },
    {
      key: "service-requests",
      icon: <AppstoreOutlined />,
      label: <Link to="/service-requests">Service Requests</Link>,
    },
    {
      key: "feedback",
      icon: <MailOutlined />,
      label: <Link to="/feedback">Feedback</Link>,
    },
    {
      key: "contact",
      icon: <SettingOutlined />,
      label: <Link to="/contact">Contact</Link>,
    },
  ]
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[`${window.location.pathname}`]}
      items={menuItems}
      style={{ backgroundColor: "#4f4b40", width: "100%"}}
    ></Menu>
  )
}
export default Navbar
