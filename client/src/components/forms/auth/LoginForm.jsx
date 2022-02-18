import React, { useState } from "react"
import $http from "../../../plugins/axios"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("")
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
      });
      console.log(response.data?.data?.token)
      const user = {email, password}
      localStorage.setItem('user', response.data.data?.email)
      console.log(user)
      console.log("Hello world")
      localStorage.setItem('access_token', response.data?.data?.token);
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
