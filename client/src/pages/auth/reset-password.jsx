import * as React from "react"

import PageLayout from "../../layouts/PageLayout"
import ResetPasswordForm from "../../components/forms/auth/ResetPasswordForm"

const ResetPassword = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p className="pt-6 pb-6 is-size-3 has-text-centered">
          Please enter your new password
        </p>
        <div className="columns">
            <div className="column is-two-thirds">
            <ResetPasswordForm />
            </div>
        </div>
      </div>
    </PageLayout>
  )
}
export default ResetPassword
