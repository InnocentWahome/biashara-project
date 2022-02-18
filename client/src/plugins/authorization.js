import { useForkRef } from "@mui/material"
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
    const userId = response.data.data.id
    const setUserId = () => localStorage.setItem("userId")
    const getUserId = () => localStorage.getItem("userId")

  } catch (error) {
    console.error(error)
  }
}

export default Authorization
