import axios from "axios"

const API = "http://localhost:5000/api/auth"

export const signup = async (user) => {
  const res = await axios.post(`${API}/signup`, user)
  return res.data
}

export const login = async (user) => {
  const res = await axios.post(`${API}/login`, user)

  localStorage.setItem("token", res.data.token)

  return res.data
}
