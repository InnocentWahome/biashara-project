import * as React from "react"

import PageLayout from "../../layouts/PageLayout"
import ForgotPasswordForm from "../../components/forms/auth/ForgotPasswordForm"

const ForgotPassword = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p class="pt-6 pb-6 is-size-4 has-text-centered">
          Forgot Password? <br />
          Enter Your Email Address To Receive A Reset Link
        </p>
        <div class="columns">
          <div class="column is-two-thirds">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
export default ForgotPassword
