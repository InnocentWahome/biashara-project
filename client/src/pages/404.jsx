import * as React from "react"

import PageLayout from "../layouts/PageLayout"

const NotFoundPage = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p class="has-text-centered is-title-2">
          The page you are looking for does not exist
        </p>
      </div>
    </PageLayout>
  )
}
export default NotFoundPage
