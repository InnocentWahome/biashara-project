import * as React from "react"
// import Layout from "../../layouts/Layout"
import ResetPasswordForm from "../../components/forms/authentication/ResetPasswordForm"
// import ResetPasswordImage from "../../assets/icons/authentication/reset-password.svg"

// import "../../assets/css/authentication.css"
const ResetPassword = () => {
  return (
    <section className="vh-100 background-setting">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-light text-dark"
              style={{ borderRadius: "1rem" }}
            >
              <div class="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase has-text title">
                    Forgot Password Password
                  </h2>
                  <p class="has-text mt-3 subtitle">
                    Please enter your login email
                  </p>
                </div>
                <ResetPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ResetPassword
