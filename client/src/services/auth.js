import $http from "../plugins/axios"

const Authorization = async e => {
    try {
      const loggedInUserId = 10
      const response = await $http.Authentication({
        method: "GET",
        url: `/user/${loggedInUserId}`,
      });
      if (response.status === 200) {
        const userFirstName = response.data.data.firstName
        const userRole = response.data.data.role
        const userEmail = response.data.data.email
        const userId = response.data.data.id
        console.log("response from users-roles")
        console.log(userRole)
        console.log(userEmail)
        console.log(userId)
      } 
    } catch (error) {
      console.error(error)
    }
  }

export default Authorization