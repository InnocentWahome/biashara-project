import React from "react"

const EmployeeWorkLogForm = () => {
  return (
    <form action="" method="POST" className="container">
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
             <p className="label">Date</p>
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
             <p className="label">Check-in Time</p>
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
             <p className="label">Check-out  on Time</p>
                <input className="input" type="text" placeholder="" />
              </div>
            </div>  
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
             <p className="label">Overtime Hours</p>
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
