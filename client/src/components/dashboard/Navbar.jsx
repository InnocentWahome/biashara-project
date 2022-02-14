import React from "react"
import "./responsiveNav"
import biasharaLogo from "../../assets/images/biashara_logo.png"
const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear()
  }

  return (
    <nav
      className="navbar navbar-menu is-fixed-top"
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
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/dashboard/products">
            Home
          </a>
          <a className="navbar-item" href="/dashboard/my-orders">
            My Orders
          </a>
          <a className="navbar-item" href="/dashboard/feedback">
            Feedback
          </a>
          <a className="navbar-item" href="/dashboard/contact">
            Contact Us
          </a>
          <a className="navbar-item" href="/">
            <button
              className="button is-outlined is-danger "
              to="/"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
