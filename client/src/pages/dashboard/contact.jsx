import * as React from "react"
import PageLayout from "../../layouts/PageLayout"
import ContactForm from "../../components/forms/ContactForm"
import contactImage from "../../assets/icons/contact.svg"
const ContactPage = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <div className="columns">
          <div className="column is-one-half">
            <p className="is-size-4 pb-6 mb-6">
              Need help with anything? <br />
              Contact us through the form below
            </p>
            <ContactForm />
          </div>
          <div className="column is-one-half">
            <img alt="contact form support image" src={contactImage} />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
export default ContactPage
