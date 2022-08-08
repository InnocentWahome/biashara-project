import * as React from "react"
import Layout from "../../layouts/Layout"
import ResetPasswordForm from "../../components/forms/authentication/ResetPasswordForm"
import resetPasswordImage from "../../assets/icons/authentication/reset-password.svg"

const ResetPassword = () => {
  return (
    <Layout>
      <div className="container pt-6 pl-6">
        <div className="columns">
          <div className="column is-half">
            <div className="hero">
              <div className="hero-body pt-6 mt-6 is-centered is-vcentered">
                <ResetPasswordForm />
              </div>
              <p className="is-size-6">
                Go back to<a href="/authentication/login"> Login </a>page?
              </p>
            </div>
          </div>
          <div className="column is-half">
            <div className="container">
              <img alt="reset password " src={resetPasswordImage} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ResetPassword
