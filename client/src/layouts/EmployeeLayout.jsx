import React from "react"
import { EmployeeNavbar, EmployeeFooter } from "../components"
import { navigate } from "gatsby"

const Authorization = () => {
  try {
    const userRole = localStorage.getItem("userRole")
    if (userRole === "User") {
      navigate("/errors/forbidden")
    } else if ( !userRole) {
      navigate("/errors/unauthorized")
    }
  } catch (error) {
    console.error(error)
  }
}

const employeeLayout = ({ children }) => {
  Authorization()
  return (
    <div>
      <EmployeeNavbar />
      {children}
      <EmployeeFooter />
    </div>
  )
}

export default employeeLayout
