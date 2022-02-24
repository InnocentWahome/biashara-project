import React from "react"

const DeliveredProductsReports = () => {
  return (
    <form action="" method="POST" className="container">
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
              <p className="label">Product ID</p>
                <input className="input" type="number" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
             <p className="label">Problem Description</p>
                <textarea className="textarea" placeholder=""></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Submit Report
          </button>
        </div>
      </div>
    </form>
  )
}

export default DeliveredProductsReports
