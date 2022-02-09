import React from "react"

const ResetPasswordForm = () => {
  return (
    <form action="" method="POST" className="container">
      <div className="container">
      <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input className="input" type="password" placeholder="password" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input className="input" type="password" placeholder=" confirm password" />
              </div>
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
