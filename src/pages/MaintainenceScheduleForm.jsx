import React, { useState } from "react"
import $http from "../plugins/axios"

const MaintenanceScheduleForm = ({ entity, setEntity }) => {
  entity = entity || {}
  const [category, setCategory] = useState(entity.category)
  const [description, setDescription] = useState(entity.description)
  const [date, setDate] = useState(entity.date)
  const createEmployeeWorklog = async e => {
    try {
      e.preventDefault()
      if (entity.id) {
        // if entity id exists, update record
        await $http.Api({
          method: "PUT",
          url: "/service-request/" + entity.id,
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
  console.log(entity)
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
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="category"
                      className="pl-2 pr-2"
                      defaultValue={entity.category}
                      onChange={e => setCategory(e.target.value)}
                    />
                    Software Update
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="category"
                      defaultValue={entity.category}
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
                  defaultValue={entity.description}
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
                  defaultValue={entity.date}
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
            onClick={console.log(entity.id)}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default MaintenanceScheduleForm
