import * as React from "react"
import forbiddenImage from "../../assets/icons/errors/403.svg"
// import { Link } from "gatsby"
import { navigate } from "gatsby"

const ForbiddenPage = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered is-vcentered">
            <div className="column is-half">
              <figure className="image is-4by3">
                <img src={forbiddenImage} alt="403 Error" />
              </figure>
              <div className="content has-text-centered">
                <h1>NO ACCESS! </h1>
                <p>
                  You're don't have the correct role to continue to this page
                </p>
                <button
                  onClick={() => navigate(-2)}
                  className="button is-danger is-rounded"
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ForbiddenPage
