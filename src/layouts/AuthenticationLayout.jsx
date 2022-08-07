import React from "react"
import { AuthNavbar, AuthFooter } from "../components"

const authenticationLayout = ({ children }) => {
  return (
    <div>
      <AuthNavbar />
      {children}
      <AuthFooter />
    </div>
  )
}

export default authenticationLayout
