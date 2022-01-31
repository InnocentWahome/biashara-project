import React from "react"
import { EmployeeNavbar, EmployeeFooter } from "../components"

const employeeLayout = ({ children }) => {
  return (
    <div>
      <EmployeeNavbar />
      {children}
      <EmployeeFooter />
    </div>
  )
}

export default employeeLayout
