import React from "react"

const ContactForm = () => {
  return (
    <form
      action=""
      method="POST"
      className="container"
    >
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input className="input" type="text" placeholder="Name" />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input className="input" type="email" placeholder="Email" />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input className="input" type="text" placeholder="Phone number" />
              </div>
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
