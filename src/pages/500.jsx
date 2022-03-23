import * as React from "react"
import internalServerErrorImage from "../assets/icons/errors/500.svg"
// import { Link } from "gatsby"
import { navigate } from "gatsby"

const InternalServerErrorPage = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered is-vcentered">
            <div className="column is-half">
              <figure className="image is-4by3">
                <img src={internalServerErrorImage} alt="500 Error" />
              </figure>
              <div className="content has-text-centered">
                <h1>OOPS! </h1>
                <p>Look's like something went wrong</p>
                <button
                  onClick={() => navigate(-1)}
                  className="button is-danger is-rounded"
                >
                  Back to Safety
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default InternalServerErrorPage
