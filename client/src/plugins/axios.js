import axios from "axios"
import { history } from "react-router-dom"
const $http = {
  Authentication: axios.create({
    baseURL: "http://localhost:3333/api/v1/auth",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }),

  Api: axios.create({
    baseURL: "http://localhost:3333/api/v1",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }),
}

const accessToken = () => localStorage.getItem("access_token")

const authenticationInterceptor = config => {
  config.headers = {
    Authorization: `Bearer ${accessToken()}`,
  }
  return config
}

$http.Api.interceptors.request.use(authenticationInterceptor)
// $http.Api.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       history.redirect("/errors/unauthorized")
//     } else if (error.response.status === 403) {
//       history.redirect("/errors/forbidden")
//     } else if (error.response.status === 500) {
//       history.redirect("/errors/internal-server-error")
//     }
//     return Promise.reject(error)
//   }
// )


export default $http
