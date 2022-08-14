import * as React from "react"
import Layout from "../../layouts/Layout"
import ForgotPasswordForm from "../../components/forms/authentication/ForgotPasswordForm"
// import forgotPasswordImage from "../../assets/icons/authentication/forgot-password.svg"

const ForgotPassword = () => {
  return (
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
                    Reset Password
                  </h2>
                  <p class="has-text mt-3 subtitle">
                    Please enter your login and password!
                  </p>
                </div>
                <ForgotPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ForgotPassword
