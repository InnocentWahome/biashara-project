import React, { useState } from "react"
import { navigate } from "gatsby"
import $http from "../../../plugins/axios"


const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("")

  const forgotPassword = async e => {
    e.preventDefault()
    try {
      const response = await $http.Authentication({
        method: "POST",
        url: "/forgot-password",
        data: {
          email: email,
        },
      })
      navigate("/authentication/reset-password")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form
      action=""
      method="POST"
      className="container"
      onSubmit={forgotPassword}
    >
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Send Email
          </button>
        </div>
      </div>
    </form>
  )
}

export default ForgotPasswordForm
