import React, { useState } from "react"
import $http from "../../plugins/axios"

const CreateEmployeeForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  const register = async e => {
    try {
      e.preventDefault()
      await $http.Authentication({
        method: "POST",
        url: "/register",
        data: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
          role: role,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form action="" method="POST" className="container" onSubmit={register}>
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={e => setFirstName(e.target.value)}
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
                  type="text"
                  placeholder="Last Name"
                  required
                  onChange={e => setLastName(e.target.value)}
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
                  type="number"
                  placeholder="Phone Number"
                  required
                  onChange={e => setPhoneNumber(e.target.value)}
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
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="role"
                      value="Employee"
                      onChange={e => setRole(e.target.value)}
                    />
                       Employee
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="role"
                      value="User"
                      onChange={e => setRole(e.target.value)}
                    />
                       User
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Register
          </button>
        </div>
      </div>
    </form>
  )
}
export default CreateEmployeeForm
