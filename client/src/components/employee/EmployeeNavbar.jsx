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
          <a class="navbar-item" href="/employee/">
            Home
          </a>
          <a class="navbar-item" href="/employee/orders/">
            Orders Review
          </a>
          <a class="navbar-item" href="/employee/maintenance/">
            Maintenance
          </a>
          <a class="navbar-item" href="/employee/personal-performance/">
            My-Performance
          </a>
          <a class="navbar-item" href="/employee/delivered/">
            Delivered Products Performance
          </a>
          <a class="navbar-item" href="/employee/stock/">
            Stock
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
