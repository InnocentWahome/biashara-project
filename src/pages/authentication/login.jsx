import * as React from "react"

// import "../../assets/css/authentication.css"

import Layout from "../../layouts/Layout"
import LoginForm from "../../components/forms/authentication/LoginForm"
// import LoginImage from "../../assets/images/login3.svg"

const Login = () => {
  return (
    <Layout>
      <section className="vh-100 background-setting">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-light text-dark"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase has-text title">
                      Login
                    </h2>
                    <p className="has-text mt-3 subtitle">
                      Please login to continue
                    </p>
                  </div>
                  <LoginForm />
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="/" className="">
                      <i className="fas fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="/" className="">
                      <i className="fas fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="/" className="">
                      <i className="fas fa-google fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Login
