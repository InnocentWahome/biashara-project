import React from "react"

const ErrorsLayout = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false)

  const year = new Date().getFullYear()
  return (
    <div>
      {/* navbar */}
      <nav
        className="navbar is-spaced navbar-menu is-active is-fixed-top has-text-centered pt-3"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="title logo-font" href="/">
            Ofamis
          </a>
          <div
            href="#"
            onClick={() => {
              setIsActive(!isActive)
            }}
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <a href="/" className="navbar-item">
              <button className="button is-info">Request Demo</button>
            </a>
          </div>
        </div>
      </nav>
      {/* main content */}
      {children}
      {/* Footer */}
      {/* <p className="has-background-warning has-text-centered">
        Copyright @ofamis {year} | <a href="/">Privacy Policy</a>
      </p> */}
    </div>
  )
}

export default ErrorsLayout
