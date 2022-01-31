import React from "react"

const ResetPasswordForm = () => {
  return (
    <form action="" method="POST" class="container">
      <div class="container">
      <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="password" placeholder="password" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="password" placeholder=" confirm password" />
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Reset Password
          </button>
        </div>
      </div>
    </form>
  )
}

export default ResetPasswordForm
