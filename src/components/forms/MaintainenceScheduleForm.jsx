import React, { useState } from "react"
import $http from "../../plugins/axios"

const MaintenanceScheduleForm = () => {
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  const createEmployeeWorklog = async e => {
    try {
      e.preventDefault()
      await $http.Api({
        method: "POST",
        url: "/service-request",
        data: {
          date: date,
          category: category,
          description: description,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form
      action=""
      method="POST"
      className="container"
      onSubmit={createEmployeeWorklog}
    >
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Service Category</p>
                {/* <input
                  className="input"
                  type="text"
                  placeholder=""
                  required
                  onChange={e => setCategory(e.target.value)}
                /> */}
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="category"
                      value="Software Update"
                      className="pl-2 pr-2"
                      onChange={e => setCategory(e.target.value)}
                    />
                    Software Update
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="category"
                      value="Maintenance"
                      onChange={e => setCategory(e.target.value)}
                    />
                    Maintenance
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="category"
                      value="Service Request"
                      onChange={e => setCategory(e.target.value)}
                    />
                    Service Request
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Service Description</p>
                <textarea
                  className="textarea"
                  placeholder=""
                  required
                  onChange={e => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Service Date</p>
                <input
                  className="input"
                  type="text"
                  placeholder="YYYY-MM-DD"
                  required
                  onChange={e => setDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default MaintenanceScheduleForm
