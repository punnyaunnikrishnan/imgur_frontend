import axios from "axios"
const API_URL = "http://localhost:8000/"

//register function API
const register = (fullName, email, password) => {
  return axios.post(API_URL + "register", {
    fullName,
    email,
    password,
  })
}

//login function API
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data
    })
}
const logout = () => {
  localStorage.removeItem("user")
}
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"))
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getCurrentUser,
}
