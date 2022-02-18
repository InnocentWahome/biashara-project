import * as React from "react"
import PageLayout from "../../layouts/PageLayout"
import ForgotPasswordForm from "../../components/forms/auth/ForgotPasswordForm"
import forgotPasswordImage from "../../assets/icons/authentication/forgot-password.svg"

const ForgotPassword = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <div className="columns">
          <div className="column is-half">
            <div className="container">
              <img alt="forgot password " src={forgotPasswordImage} />
            </div>
          </div>
          <div className="column is-half">
            <div className="hero">
              <div className="hero-body pt-6 mt-6 is-centered is-vcentered">
                <ForgotPasswordForm />
              </div>
              <p className="is-size-6">
                We will email you a
                <a href="/authentication/reset-password">reset password</a>{" "}
                link shortly
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
export default ForgotPassword
