import React from "react"
import PageLayout from "../../layouts/PageLayout"
import FeedbackForm from "../../components/forms/FeedbackForm"

const DashboardFeedback = () => {

  return (
    <PageLayout>
      <div className="container pt-6">
        <div class="columns">
          <div class="column is-two-thirds">
            image
          </div>
          <div class="column">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DashboardFeedback
