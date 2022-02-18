import * as React from "react"
import PageLayout from "../../layouts/PageLayout"
import forbiddenImage from "../../assets/icons/errors/forbidden.svg"
import { Link } from "gatsby"

const ForbiddenPage = () => {
  return (
    <PageLayout>
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
export default ForbiddenPage
