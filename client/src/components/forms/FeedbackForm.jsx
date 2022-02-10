import React from "react"

const OrderForm = () => {
  return (
    <form action="" method="POST" className="container">
      <div className="container">
        <p class="pt-6 is-size-4 pb-3">Share your opinion</p>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
              <p className="label">Product ID</p>
                <input className="input" type="product" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
              <p className="label">Quantity</p>
                <input className="input" type="number" placeholder="" />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Order 
          </button>
        </div>
      </div>
    </form>
  )
}

export default OrderForm
