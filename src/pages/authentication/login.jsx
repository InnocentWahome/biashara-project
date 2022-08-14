import * as React from "react"

import "../../assets/css/authentication.css"

import Layout from "../../layouts/Layout"
import LoginForm from "../../components/forms/authentication/LoginForm"
import LoginImage from "../../assets/images/login3.svg"

const Login = () => {
  return (
    <Layout>
      <section class="vh-100 background-setting">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card bg-light text-dark"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase has-text title">
                      Login
                    </h2>
                    <p class="has-text mt-3 subtitle">
                      Please login to continue
                    </p>
                  </div>
                  <LoginForm />
                  <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" class="">
                      <i class="fas fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#!" class="">
                      <i class="fas fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="#!" class="">
                      <i class="fas fa-google fa-lg"></i>
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
