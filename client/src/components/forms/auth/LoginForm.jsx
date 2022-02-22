import React, { useState } from "react"
import $http from "../../../plugins/axios"
import { navigate } from "gatsby"
import Authorization from "../../../plugins/authorization"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async e => {
    e.preventDefault()
    try {
      const response = await $http.Authentication({
        method: "POST",
        url: "/login",
        data: {
          email: email,
          password: password,
        },
      })
      // const accessToken = console.log(response.data?.data?.token)
      localStorage.setItem("access_token", response.data?.data?.token)
      Authorization()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form action="" method="POST" className="container" onSubmit={login}>
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
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  )
}
export default LoginForm
