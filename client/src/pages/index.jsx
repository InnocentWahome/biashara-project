import * as React from "react"

import AuthenticationLayout from "../layouts/AuthenticationLayout"
import Image from "../assets/images/home2.jpg"

const IndexPage = () => {
  return (
    <AuthenticationLayout>
      <section className="hero is-fullheight is-">
        <div className="hero-">
          <div className="pt-6 mt-6 container">
            <div className="columns is-centered is-vcentered">
              <div className="column is-two-fifths">
                <div className="content">
                  <h1 className="subtitle">
                    Meet The Simplest Way To Track Your Products Online
                  </h1>
                  <p>
                    Here at Biashara, we offer unlimited solutions to your
                    orders online .We are built within a vast network of
                    resources to meet your needs. Want to get started? It's
                    easy. Just click the button below to sign up or sign in to
                    track your orders
                  </p>
                </div>
              </div>
              <div className="column is-two-fifths">
                <figure className="image is-2by2">
                  <img src={Image} alt="launch" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthenticationLayout>
  )
}
export default IndexPage
