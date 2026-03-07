import API from "./api"

export const signup = async(data)=>{

const res = await API.post("/auth/signup",data)

return res.data

}

export const login = async(data)=>{

const res = await API.post("/auth/login",data)

if(res.data.token){

localStorage.setItem("token",res.data.token)

}

return res.data

}
