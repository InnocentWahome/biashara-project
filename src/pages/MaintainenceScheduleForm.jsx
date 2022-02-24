import React, { useState } from "react"
import $http from "../plugins/axios"

const MaintenanceScheduleForm = ({ service, setService }) => {
  service = service || {}
  const [category, setCategory] = useState(service.category)
  const [description, setDescription] = useState(service.description)
  const [date, setDate] = useState(service.date)
  const createEmployeeWorklog = async e => {
    try {
      e.preventDefault()
      if (service.id) {
        // if service id exists, update record
        await $http.Api({
          method: "PUT",
          url: "/service-request/" + service.id,
          data: {
            date: date,
            category: category,
            description: description,
          },
        })
      } else {
        // create
        await $http.Api({
          method: "POST",
          url: "/service-request",
          data: {
            date: date,
            category: category,
            description: description,
          },
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  console.log(service)
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
                      className="pl-2 pr-2"
                      defaultValue={service.category}
                      onChange={e => setCategory(e.target.value)}
                    />
                    Software Update
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="category"
                      defaultValue={service.category}
                      onChange={e => setCategory(e.target.value)}
                    />
                    Maintenance
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="category"
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
                  defaultValue={service.description}
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
                  defaultValue={service.date}
                  onChange={e => setDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <button
            className="button is-black is-rounded"
            type="submit"
            onClick={console.log(service.id)}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default MaintenanceScheduleForm
