import axios from "axios"
// import { history } from "react-router-dom"
// require('dotenv');
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

const $http = {
  Authentication: axios.create({
    baseURL: process.env.GATSBY_AUTHENTICATION_BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),

  Api: axios.create({
    baseURL: process.env.GATSBY_API_BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
};


const accessToken = () => localStorage.getItem("access_token")

const authenticationInterceptor = config => {
  config.headers = {
    Authorization: `Bearer ${accessToken()}`,
  }
  return config
}

$http.Api.interceptors.request.use(authenticationInterceptor)

export default $http
