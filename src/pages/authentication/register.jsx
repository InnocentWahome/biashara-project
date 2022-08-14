import * as React from "react"

import "../../assets/css/authentication.css"

import Layout from "../../layouts/Layout"
import RegisterForm from "../../components/forms/authentication/RegisterForm"
import RegisterImage from "../../assets/images/login3.svg"

const Register = () => {
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
                      Register
                    </h2>
                    <p className="has-text mt-3 subtitle">
                      Please register to continue
                    </p>
                  </div>
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Register
