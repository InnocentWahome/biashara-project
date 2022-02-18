import $http from "../plugins/axios"

const Authorization = async e => {
  try {
    const loggedInUserId = 10
    const loggedInUserRole = "Admin"
    const response = await $http.Authentication({
      method: "GET",
      url: `/user/${loggedInUserId}`,
    })
    if (loggedInUserRole === "Admin") {
      console.log("You are authorized to view all pages")
    } else if (loggedInUserRole === "Employee") {
      console.log("You can only view Employee Pages")
    } else if (loggedInUserRole === "User") {
      console.log("You can only view User Pages")
    }
  } catch (error) {
    console.error(error)
  }
}

export default Authorization
