import React from "react"
import { Navbar, Footer } from "../components"
import { navigate } from "gatsby"


const Authorization = () => {
  try {
    const userRole = localStorage.getItem("userRole")
    if (userRole === "Employee") {
      navigate("/errors/forbidden")
    } else if (!userRole) {
      navigate("/errors/unauthorized")
    }
  } catch (error) {
    console.error(error)
  }
}
const pageLayout = ({ children }) => {
  Authorization()

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default pageLayout
