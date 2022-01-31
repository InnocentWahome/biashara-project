import * as React from "react"

import PageLayout from "../../layouts/PageLayout"

const ForbiddenPage = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p class="has-text-centered is-title-2">
          You are not allowed beyond this point, Click here to go back home
        </p>
      </div>
    </PageLayout>
  )
}
export default ForbiddenPage
