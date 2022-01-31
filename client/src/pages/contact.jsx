import * as React from "react"

import PageLayout from "../layouts/PageLayout"
import ContactForm from "../components/forms/ContactForm"

const ContactPage = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p class="pt-6 pb-6">Testimonials here then contact form</p>
        <ContactForm />
      </div>
    </PageLayout>
  )
}
export default ContactPage
