import * as React from "react"
import unauthorizedImage from "../../assets/icons/errors/401.svg"
import { Link } from "gatsby"

const InternalServerErrorPage = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered is-vcentered">
            <div className="column is-half">
              <figure className="image is-4by3">
                <img src={unauthorizedImage} alt="401 Error" />
              </figure>
              <div className="content has-text-centered">
                <h1>SORRY! </h1>
                <p>
                  You do not have valid authentication to be allowed to view
                  this page
                </p>
                <Link
                  to="/authentication/login"
                  className="button is-danger is-rounded"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default InternalServerErrorPage
