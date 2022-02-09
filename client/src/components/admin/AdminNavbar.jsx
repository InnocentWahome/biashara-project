import React from "react"

const Navbar = () => {
  return (
    <nav
      className="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="112"
            alt="default alt"
          />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/admin/">
            Home
          </a>
          <a className="navbar-item" href="/admin/employees/">
            Employee Performance
          </a>
          <a className="navbar-item" href="/admin/orders/">
            Review Orders
          </a>
          <a className="navbar-item" href="/admin/inventory/">
            Manage Inventory
          </a>
          <a className="navbar-item" href="/admin/users/">
            System Users
          </a>
          <a className="navbar-item" href="/admin/delivery/">
            Delivery Requests
          </a>
          <a className="navbar-item" href="/admin/maintenance/">
            Maintenance
          </a>
          <a className="navbar-item" href="/admin/product-performance/">
            Product Performance
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
