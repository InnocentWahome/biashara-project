import * as React from "react"

import AdminLayout from "../../layouts/AdminLayout"

const AdminHome = () => {
  return (
    <AdminLayout>
      <div className="container pt-6 pl-6">
        <div className="pb-6 pt-6">
          <p className="title is-4 has-text-centered">Welcome back Admin,</p>
        </div>
      </div>
    </AdminLayout>
  )
}
export default AdminHome
