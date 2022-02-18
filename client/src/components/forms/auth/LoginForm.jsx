import React, { useState } from "react"
import $http from "../../../plugins/axios"

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
      const accessToken = console.log(response.data?.data?.token)
      localStorage.setItem("access_token", response.data?.data?.token)
      const Authorization = async e => {
        // e.preventDefault()
        try {
          const token = localStorage.getItem("access_token")
          const response = await $http.Authentication({
            method: "GET",
            url: `/user`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          const userId = response.data?.data?.id
          console.log("below is the user id")
          console.log(userId)
          localStorage.setItem("userId", response.data?.data?.id)
        } catch (error) {
          console.error(error)
        }
      }
      Authorization()
    } catch (error) {
      console.error(error)
    }
  }
  // const Authorization = async e => {
  //   // e.preventDefault()
  //   try {
  //     const token = localStorage.getItem("access_token")
  //     const response = await $http.Authentication({
  //       method: "GET",
  //       url: `/user`,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     const userId = response.data?.data?.id
  //     console.log("below is the user id")
  //     console.log(userId)
  //     localStorage.setItem("userId", response.data?.data?.id)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // Authorization()
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
