import React from "react"
import "./responsiveNav"


const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <nav
    className="navbar navbar-menu is-active is-fixed-top"
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
          <a className="navbar-item" href="/">
            <button className="button is-outlined is-danger " to="/" onClick={handleLogout}>
              Log Out
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
