import * as React from "react"
import PageLayout from "../layouts/PageLayout"
import pageNotFoundImage from "../assets/icons/errors/404.svg"
import { Link } from "gatsby"

const PageNotFound = () => {
  return (
    <PageLayout>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered is-vcentered">
              <div className="column is-half">
                <figure className="image is-4by3">
                  <img src={pageNotFoundImage} alt="404 Error" />
                </figure>
                <div className="content has-text-centered">
                  <h1>PAGE NOT FOUND! </h1>
                  <p>
                  It seems the page you requested does not exist
                  </p>
                  <Link to="/dashboard/products" className="button is-danger is-rounded">
                    Go back home
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
export default PageNotFound
