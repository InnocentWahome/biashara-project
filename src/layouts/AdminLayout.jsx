import React from "react"
import { AdminNavbar, AdminFooter } from "../components"
import { navigate } from "gatsby"

const Authorization = () => {
  try {
    const userRole = localStorage.getItem("userRole")
    if (userRole === "Employee" || userRole === "User") {
      navigate("/errors/forbidden")
    } else if ( !userRole) {
      navigate("/errors/unauthorized")
    }
  } catch (error) {
    console.error(error)
  }
}
const adminLayout = ({ children }) => {
  Authorization()
  return (
    <div>
      <AdminNavbar />
      {children}
      <AdminFooter />
    </div>
  )
}

export default adminLayout
