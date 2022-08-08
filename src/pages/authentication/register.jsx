import * as React from "react"

import Layout from "../../layouts/Layout"
import RegisterForm from "../../components/forms/authentication/RegisterForm"
import registerImage from "../../assets/icons/authentication/register.svg"

const Register = () => {
  return (
    <Layout>
      <div className="container pt-6 pl-6">
        <div className="columns">
          <div className="column is-half">
            <div className="hero">
              <div className="hero-body pt-6 mt-6 is-centered is-vcentered">
                <RegisterForm />
              </div>
              <p className="is-size-6">
                Already have an account?
                <a href="/authentication/login"> Login </a>
              </p>
            </div>
          </div>
          <div className="column is-half">
            <div className="container">
              <img alt="register " src={registerImage} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Register
