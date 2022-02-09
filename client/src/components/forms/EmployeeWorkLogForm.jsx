import React from "react"

const EmployeeWorkLogForm = () => {
  return (
    <form action="" method="POST" className="container">
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
              <label className="label">Date</label>
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
              <label className="label">Check-in Time</label>
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
              <label className="label">Check-out  on Time</label>
                <input className="input" type="text" placeholder="" />
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
