import React from "react"

const ContactForm = () => {
  return (
    <form
      action=""
      method="POST"
      class="container"
    >
      <div class="container">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text" placeholder="Name" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="email" placeholder="Email" />
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text" placeholder="Phone number" />
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <textarea placeholder="Message" className="textarea"></textarea>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
