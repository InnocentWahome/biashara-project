import React, { useState } from "react"
import $http from "../../plugins/axios"

const EmployeeWorkLogForm = () => {
  const [date, setDate] = useState("")
  const [day, setDay] = useState("")
  const [startTime, setStartTime] = useState("")
  const [stopTime, setStopTime] = useState("")
  const [hoursWorked, setHoursWorked] = useState("")
  const [workDescription, setWorkDescription] = useState("")

  const createEmployeeWorklog = async e => {
    try {
      e.preventDefault()
      await $http.Api({
        method: "POST",
        url: "/worklog",
        data: {
          date: date,
          day: day,
          start: startTime,
          stop: stopTime,
          hours: stopTime - startTime,
          description: workDescription,
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
                <p className="label">Date</p>
                <input
                  className="input"
                  type="text"
                  placeholder="eg: YYYY-MM-DD"
                  required
                  onChange={e => setDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Day</p>
                <div className="select" onChange={e => setDay(e.target.value)}>
                  <select onChange={e => setDay(e.target.value)}>
                    <option
                      onChange={e => setDay(e.target.value)}
                      value="Monday"
                    >
                      Monday
                    </option>
                    <option
                      onChange={e => setDay(e.target.value)}
                      value="Tuesday"
                    >
                      Tuesday
                    </option>
                    <option
                      onChange={e => setDay(e.target.value)}
                      value="Wednesday"
                    >
                      Wednesday
                    </option>
                    <option
                      onChange={e => setDay(e.target.value)}
                      value="Thursday"
                    >
                      Thursday
                    </option>
                    <option
                      onChange={e => setDay(e.target.value)}
                      value="Friday"
                    >
                      Friday
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control is-expanded">
                    <p className="label">Start Time</p>
                    <input
                      className="input"
                      type="number"
                      placeholder="eg: 0800"
                      required
                      onChange={e => setStartTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control is-expanded">
                    <p className="label">Stop Time</p>
                    <input
                      className="input"
                      type="number"
                      placeholder="eg: 1700"
                      required
                      onChange={e => setStopTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Work Description</p>
                <textarea
                  className="textarea"
                  placeholder=""
                  required
                  onChange={e => setWorkDescription(e.target.value)}
                ></textarea>
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

export default EmployeeWorkLogForm
