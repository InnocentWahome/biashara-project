import React from "react"

const StockForm = () => {
  return (
    <form action="" method="POST" className="container">
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <label className="label">Product Name</label>
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <label className="label">Product ID</label>
                <input className="input" type="number" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <label className="label">Product Quantity</label>
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <label className="label">Product Price</label>
                <input className="input" type="number" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Create / Update Stock
          </button>
        </div>
      </div>
    </form>
  )
}

export default StockForm
