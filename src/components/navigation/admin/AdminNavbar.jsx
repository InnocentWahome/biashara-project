import React from "react"
import Logo from "../../../assets/images/logo.png"

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear()
  }
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav
      className="navbar navbar-menu is-active is-fixed-top has-text-centered"
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
        <a href="#"
          onClick={() => {
            setisActive(!isActive)
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <a className="navbar-item" href="/admin">
            Home
          </a>
          <a className="navbar-item" href="/admin/employee-performance/">
            Employee Performance
          </a>
          <a className="navbar-item" href="/admin/orders/">
            Review Orders
          </a>
          <a className="navbar-item" href="/admin/inventory/">
            Manage Inventory
          </a>
          <a className="navbar-item" href="/admin/users/">
            System Users
          </a>
          {/* <a className="navbar-item" href="/admin/delivery/">
            Delivery Requests
          </a> */}
          <a className="navbar-item" href="/admin/maintenance/">
            Maintenance
          </a>
          <a className="navbar-item" href="/admin/product-performance/">
            Product Performance
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
