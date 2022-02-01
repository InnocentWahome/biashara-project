import React from "react"

const Navbar = () => {
  return (
    <nav
      class="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
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
          <a class="navbar-item" href="/dashboard">
            Home
          </a>
          <a class="navbar-item" href="/dashboard/my-orders">
            Orders
          </a>
          <a class="navbar-item" href="/dashboard/contact">
            Contact Us
          </a>
          <a class="navbar-item" href="/">
            <button class="button is-outlined is-danger " to="/">
              Log Out
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
