import React from "react"
import "./responsiveNav"

const Navbar = props => {

  const handleLogout = () => {
    localStorage.clear();
  };

  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active")
  }
  return (
    <nav className="navbar is-spaced is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="112"
            alt="default alt"
          />
        </a>
        <button
          className="navbar-burger burger "
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true" className=""></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/admin/" onClick={toggleBurgerMenu}>
            Home
          </a>
          <a className="navbar-item" href="/admin/employees/" onClick={toggleBurgerMenu}>
            Employee Performance
          </a>
          <a className="navbar-item" href="/admin/orders/" onClick={toggleBurgerMenu}>
            Review Orders
          </a>
          <a className="navbar-item" href="/admin/inventory/" onClick={toggleBurgerMenu}>
            Manage Inventory
          </a>
          <a className="navbar-item" href="/admin/users/" onClick={toggleBurgerMenu}>
            System Users
          </a>
          <a className="navbar-item" href="/admin/delivery/" onClick={toggleBurgerMenu}>
            Delivery Requests
          </a>
          <a className="navbar-item" href="/admin/maintenance/" onClick={toggleBurgerMenu}>
            Maintenance
          </a>
          <a className="navbar-item" href="/admin/product-performance/" onClick={toggleBurgerMenu}>
            Product Performance
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
