import React from "react"
import biasharaLogo from "../../assets/images/biashara_logo.png"
const Navbar = () => {
  return (
    <nav
      className="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <figure className="image is-32x32">
          <img
            src={biasharaLogo}
            // width="112"
            // height="112"
            // className="image is-32x32"
            alt="default alt"
          />
          </figure>
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
