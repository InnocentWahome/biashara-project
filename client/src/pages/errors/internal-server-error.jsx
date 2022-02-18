import * as React from "react"
import PageLayout from "../../layouts/PageLayout"
import internalServerErrorImage from "../../assets/icons/errors/internal-server-error.svg"
import { Link } from "gatsby"

const InternalServerErrorPage = () => {
  return (
    <PageLayout>
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
                  <p>
                  Look's like something went wrong
                  </p>
                  <Link to="/dashboard/products" className="button is-danger is-rounded">
                    Back to Safety
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
export default InternalServerErrorPage
