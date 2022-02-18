import axios from "axios"
import $http from "./axios"

const Authorization = async e => {
  try {
    const token = localStorage.getItem("access_token")
    const response = await $http.Authentication({
      method: "GET",
      url: `/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const userRole = response.data.data.role
    console.log(userRole)
    if (userRole === "Admin") {
      console.log("You are an Admin. Only admins can access these pages")
    } else if (userRole === "Employee") {
      console.log(
        "You are an Employee. Both Employees and Admins have access to these pages"
      )
    } else {
      console.log("Anyone can access the user pages")
    }
  } catch (error) {
    console.error(error)
  }
}

export default Authorization
