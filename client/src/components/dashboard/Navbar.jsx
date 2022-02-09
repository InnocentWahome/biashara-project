import React from "react"

const Navbar = () => {
  return (
    <nav
      className="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
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
          <a className="navbar-item" href="/dashboard">
            Home
          </a>
          <a className="navbar-item" href="/dashboard/my-orders">
            Orders
          </a>
          <a className="navbar-item" href="/dashboard/contact">
            Contact Us
          </a>
          <a className="navbar-item" href="/">
            <button className="button is-outlined is-danger " to="/">
              Log Out
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
