import React, { useState } from "react"
import $http from "../../plugins/axios"

const CreateEmployeeForm = ({ entity, setEntity }) => {
  entity = entity || {}
  const [firstName, setFirstName] = useState(entity.firstName)
  const [lastName, setLastName] = useState(entity.lastName)
  const [phoneNumber, setPhoneNumber] = useState(entity.phoneNumber)
  const [email, setEmail] = useState(entity.email)
  const [password, setPassword] = useState(entity.password)
  const [role, setRole] = useState(entity.role)

  const register = async e => {
    try {
      e.preventDefault()
      if (entity.id) {
        // if entity id exists, update record
        await $http.Api({
          method: "PUT",
          url: "/user-change/" + entity.id,
          data: {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            role: role,
          },
        })
      } else {
        // create
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
      }
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
                  defaultValue={entity.firstName}
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
                  defaultValue={entity.lastName}
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
                  defaultValue={entity.email}
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
                  type="string"
                  placeholder="Phone Number"
                  required
                  defaultValue={entity.phoneNumber}
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
                  type="string"
                  placeholder="password"
                  required
                  defaultValue={entity.password}
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
