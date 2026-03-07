import axios from "axios"

const API = `process.env.REACT_APP_API_URL`

export const signup = async (user) => {
  const res = await axios.post(`${API}/signup`, user)
  return res.data
}

export const login = async (user) => {
  const res = await axios.post(`${API}/login`, user)

  localStorage.setItem("token", res.data.token)

  return res.data
}
