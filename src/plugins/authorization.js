import $http from "./axios"
import { navigate } from "gatsby"

const Authorization = async e => {
  try {
    const userRole = localStorage.getItem("userRole")
    const properRedirect = () => {
      try {
        if (userRole === "Employee") {
          navigate("/employee/")
        } else if (userRole === "User") {
          navigate("/dashboard/products")
        } else if (userRole === "Admin") {
          navigate("/admin/")
        }
      } catch (error) {
        console.error(error)
      }
    }
    const token = localStorage.getItem("access_token")
    const userResponse = await $http.Authentication({
      method: "GET",
      url: `/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    await properRedirect()
    // const userFirstName = userResponse.data?.data?.firstName
    // const userId = userResponse.data?.data?.id
    localStorage.setItem("userId", userResponse.data?.data?.id)
    localStorage.setItem("userEmail", userResponse.data?.data?.email)
    localStorage.setItem("userFirstName", userResponse.data?.data?.firstName)
    localStorage.setItem("userRole", userResponse.data?.data?.role)
  } catch (error) {
    console.error(error)
  }
}

export default Authorization
