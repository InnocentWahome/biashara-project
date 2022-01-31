import React from "react"
import { Navbar, Footer } from "../components"

const pageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default pageLayout
