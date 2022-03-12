import React from "react"
import Logo from "../../../assets/images/logo.jpg"
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
            src={Logo}
            width="100"
            height="350"
            alt="default alt"
          />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="pr-6 pt-4">
            <a
              className="navbar-item button is-danger is-outlined"
              href="/authentication/register"
            >
              Sign Up
            </a>
          </div>
          <div className="pr-6 pt-4">
            <a
              className="navbar-item button is-danger "
              href="/authentication/login"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
