import React from "react"
import PageLayout from "../../layouts/PageLayout"
import FeedbackForm from "../../components/forms/FeedbackForm"
import feedbackImage from "../../assets/icons/feedback.svg"

const DashboardFeedback = () => {
  return (
    <PageLayout>
      <div className="container pt-6 mt-6 pl-6">
        <div className="columns">
          <div className="column is-one-half">
            <img alt="feedback form support " src={feedbackImage} />
          </div>
          <div className="column is-one-half">
            <p className="is-size-4 pb-6 mb-6">We Appreciate Your Feedback!</p>
            <FeedbackForm />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DashboardFeedback
