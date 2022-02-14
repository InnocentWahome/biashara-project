import React from "react"
import { Link } from "gatsby"

const Navbar = props => {
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active")
  }

  return (
    <nav className="navbar is-spaced is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
        <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="112"
            alt="default alt"
          />
        </Link>

        <button
          className="navbar-burger burger has-background-primary"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true" className="has-textwhite"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        id="navbarBasic"
        className="navbar-menu has-background-primary has-text-centered pt-4"
      >
        <div className="navbar-end ">
        <Link
            to="/"
            className="navbar-item  has-text-white has-text-centered"
            onClick={toggleBurgerMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="navbar-item  has-text-white has-text-centered"
            onClick={toggleBurgerMenu}
          >
            Services
          </Link>
          <Link
            to="/work/"
            className="navbar-item  has-text-white has-text-centered"
            onClick={toggleBurgerMenu}
          >
            Work
          </Link>
          <Link
            to="/why-kisokolab/"
            className="navbar-item  has-text-white has-text-centered"
            onClick={toggleBurgerMenu}
          >
            Why Kisokolab
          </Link>
          <Link
            to="/about/"
            className="navbar-item  has-text-white has-text-centered"
            onClick={toggleBurgerMenu}
          >
            About
          </Link>
          <Link
            to="/contact/"
            className="navbar-item  has-text-white has-text-centered"
            onClick={toggleBurgerMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar