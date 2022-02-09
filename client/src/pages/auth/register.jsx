import * as React from "react"

import PageLayout from "../../layouts/PageLayout"
import RegisterForm from "../../components/forms/auth/RegisterForm"

const Register = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p className="pt-6 pb-6 has-text-centered is-size-3">Register A New Account</p>
        <div className="columns">
          <div className="column is-half">
            <RegisterForm />
          </div>
          {/* <div className="column">
            <RegisterForm />
          </div> */}
        </div>
      </div>
    </PageLayout>
  )
}
export default Register
