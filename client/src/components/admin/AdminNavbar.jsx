import React from "react"

const Navbar = () => {
  return (
    <nav
      class="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="112"
            alt="default alt"
          />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="/admin/">
            Home
          </a>
          <a class="navbar-item" href="/admin/employees/">
            Employee Performance
          </a>
          <a class="navbar-item" href="/admin/orders/">
            Review Orders
          </a>
          <a class="navbar-item" href="/admin/inventory/">
            Manage Inventory
          </a>
          <a class="navbar-item" href="/admin/users/">
            System Users
          </a>
          <a class="navbar-item" href="/admin/delivery/">
            Delivery Requests
          </a>
          <a class="navbar-item" href="/admin/maintenance/">
            Maintenance
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
