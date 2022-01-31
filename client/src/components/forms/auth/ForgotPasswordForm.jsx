import React from "react"

const ForgotPasswordForm = () => {
  return (
    <form action="" method="POST" class="container">
      <div class="container">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="email" placeholder="Email" />
              </p>
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
