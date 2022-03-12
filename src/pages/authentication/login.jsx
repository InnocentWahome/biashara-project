import * as React from "react"
import AuthenticationLayout from "../../layouts/AuthenticationLayout"
import LoginForm from "../../components/forms/authentication/LoginForm"
import loginImage from "../../assets/icons/authentication/login.svg"

const Login = () => {
  return (
    <AuthenticationLayout>
      <div className="container pt-6 pl-6">
        <div className="columns">
          <div className="column is-half">
            <div className="container">
              <img alt="login " src={loginImage} />
            </div>
          </div>
          <div className="column is-half">
            <div className="hero">
              <div className="hero-body pt-6 mt-6 is-centered is-vcentered">
                <LoginForm />
              </div>
              <p className="is-size-6">
                Forgot your Password? <a href="/authentication/forgot-password">Reset it here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticationLayout>
  )
}
export default Login
