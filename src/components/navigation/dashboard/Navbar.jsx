import React from "react"
// import ResponsiveFunction from "../../shared/ResponsiveNavbar"
import Logo from "../../../assets/images/logo.png"

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear()
  }
  // ResponsiveFunction()
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
        <a
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
          <a className="navbar-item" href="/dashboard/products">
            Home
          </a>
          <a className="navbar-item" href="/dashboard/my-orders">
            My Orders
          </a>
          <a className="navbar-item" href="/dashboard/feedback">
            Feedback
          </a>
          {/* <a className="navbar-item" href="/dashboard/contact">
            Contact Us
          </a> */}
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
