import React from "react"
import { AdminNavbar, AdminFooter } from "../components"

const adminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
      <AdminFooter />
    </div>
  )
}

export default adminLayout
