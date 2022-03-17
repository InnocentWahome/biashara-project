import React, { useState } from "react"
import $http from "../../plugins/axios"

const MaintenanceScheduleForm = ({ entity, setEntity }) => {
  entity = entity || {}
  const [category, setCategory] = useState(entity.category)
  const [description, setDescription] = useState(entity.description)
  const [date, setDate] = useState(entity.date)

  const createEmployeeWorklog = async e => {
    try {
      e.preventDefault()
      // if entity id exists, update record
      if (entity.id) {
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
                      value="Software Update"
                      className="pl-2 pr-2"
                      // onChange={e => setCategory(e.target.value)}
                      defaultValue={entity.category}
                      onChange={e => setCategory(e.target.value)}
                    />
                    Software Update
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="category"
                      value="Maintenance"
                      // onChange={e => setCategory(e.target.value)}
                      defaultValue={entity.category}
                      onChange={e => setCategory(e.target.value)}
                    />
                    Maintenance
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="category"
                      value="Service Request"
                      // onChange={e => setCategory(e.target.value)}
                      defaultValue={entity.category}
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
                  // onChange={e => setDescription(e.target.value)}
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
                  // onChange={e => setDate(e.target.value)}
                  defaultValue={entity.date}
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
