import React from "react"

const StockForm = () => {
  return (
    <form action="" method="POST" class="container">
      <div class="container">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="email" placeholder="Product Name" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="number" placeholder="Product ID" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="number" placeholder="Product Quantity" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="number" placeholder="Product Price" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="number" placeholder="Product Price" />
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
