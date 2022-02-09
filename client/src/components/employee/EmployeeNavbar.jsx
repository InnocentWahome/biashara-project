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
          <a className="navbar-item" href="/employee/">
            Home
          </a>
          <a className="navbar-item" href="/employee/orders/">
            Orders Review
          </a>
          <a className="navbar-item" href="/employee/maintenance/">
            Maintenance
          </a>
          <a className="navbar-item" href="/employee/personal-performance/">
            My-Performance
          </a>
          <a className="navbar-item" href="/employee/delivered/">
            Delivered Products Performance
          </a>
          <a className="navbar-item" href="/employee/stock/">
            Stock
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
