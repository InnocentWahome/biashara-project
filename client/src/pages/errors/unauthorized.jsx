import * as React from "react"

import PageLayout from "../../layouts/PageLayout"

const UnauthorizedPage = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p className="has-text-centered is-title-2">
          You are not authorized to view this page
        </p>
      </div>
    </PageLayout>
  )
}
export default UnauthorizedPage
