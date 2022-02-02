import React from "react"

const StockForm = () => {
  return (
    <form action="" method="POST" class="container">
      <div class="container">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
              <label class="label">Product Name</label>
                <input class="input" type="text" placeholder="" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
              <label class="label">Product ID</label>
                <input class="input" type="number" placeholder="" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
              <label class="label">Product Quantity</label>
                <input class="input" type="text" placeholder="" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
              <label class="label">Product Price</label>
                <input class="input" type="number" placeholder="" />
              </p>
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
