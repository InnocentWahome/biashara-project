import React from "react"

const MaintainenceScheduleForm = () => {
  return (
    <form action="" method="POST" className="container">
      <div className="container">
      <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
               <p className="label">Service Category</p>
               <input className="input" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
               <p className="label">Service Description</p>
                <textarea className="textarea" placeholder=""></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="is-expanded">
               <p className="label">Service Date</p>
                <input className="input" type="text" placeholder="" />
              </p>
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

export default MaintainenceScheduleForm
