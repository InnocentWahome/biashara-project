import React from "react"

const DeliveredProductsReports = () => {
  return (
    <form action="" method="POST" class="container">
      <div class="container">
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
              <label class="label">Problem Description</label>
                <textarea class="textarea" placeholder=""></textarea>
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default DeliveredProductsReports
