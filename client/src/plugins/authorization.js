import React from "react"
import $http from "./axios"
import { navigate } from "gatsby"

const Authorization = async e => {
  try {
    const userRole = localStorage.getItem("userRole")
    const token = localStorage.getItem("access_token")
    const userResponse = await $http.Authentication({
      method: "GET",
      url: `/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const userFirstName = userResponse.data?.data?.firstName
    const userId = userResponse.data?.data?.id
    localStorage.setItem("userId", userResponse.data?.data?.id)
    localStorage.setItem("userFirstName", userResponse.data?.data?.firstName)
    localStorage.setItem("userRole", userResponse.data?.data?.role)
    const properRedirect = () => {
      if (userRole === "Employee") {
        navigate("/employee/")
      } else if (userRole === "User") {
        navigate("/dashboard/products")
      } else if (userRole === "Admin") {
        navigate("/admin/")
      }
    }
    properRedirect()
  } catch (error) {
    console.error(error)
  }
}

export default Authorization
