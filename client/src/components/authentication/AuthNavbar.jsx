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
          <div class="pr-6 pt-4">
            <a class="navbar-item button" href="/auth/register">
              Sign Up
            </a>
          </div>
          <div class="pr-6 pt-4">
            <a class="navbar-item button " href="/auth/login">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
