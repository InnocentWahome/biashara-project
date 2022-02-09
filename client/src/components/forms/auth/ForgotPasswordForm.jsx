import React from "react"

const ForgotPasswordForm = () => {
  return (
    <form action="" method="POST" className="container">
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input className="input" type="email" placeholder="Email" />
              </div>
            </div>
          </div>
        </div>  

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Send Email
          </button>
        </div>
      </div>
    </form>
  )
}

export default ForgotPasswordForm
