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
          <div className="pr-6 pt-4">
            <a className="navbar-item button" href="/auth/register">
              Sign Up
            </a>
          </div>
          <div className="pr-6 pt-4">
            <a className="navbar-item button " href="/auth/login">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
