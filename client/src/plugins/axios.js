import axios from "axios"
// import { history } from "react-router-dom"
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

export default $http
