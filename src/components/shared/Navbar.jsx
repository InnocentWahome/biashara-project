import React from "react"
import { Menu } from "antd"
import { Link } from "gatsby"

const Navbar = () => (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[`${window.location.pathname}`]}
    >
      <Menu.Item key={"/"}>
        <Link to={"/"}>Home</Link>
      </Menu.Item>

      <Menu.Item key={"/cars"}>
        <Link to={"/products"}>Products</Link>
      </Menu.Item>

      <Menu.Item key={"/sell-or-trade"}>
        <Link to={"/orders"}>Orders</Link>
      </Menu.Item>

      <Menu.Item key={"/service-and-repairs"}>
        <Link to={"/deliveries"}>Deliveries</Link>
      </Menu.Item>

      <Menu.Item key={"/users"}>
        <Link to={"/users"}>Users</Link>
      </Menu.Item>

      <Menu.Item key={"/worklogs"}>
        <Link to={"/worklogs"}>WorkLogs</Link>
      </Menu.Item>

      <Menu.Item key={"/service-requests"}>
        <Link to={"/service-requests"}>Service Requests</Link>
      </Menu.Item>

      <Menu.Item key={"/feedback"}>
        <Link to={"/feedback"}>Feedback</Link>
      </Menu.Item>

      <Menu.Item key={"/contact"}>
        <Link to={"/contact"}>Contact</Link>
      </Menu.Item>
    </Menu>
)

export default Navbar
