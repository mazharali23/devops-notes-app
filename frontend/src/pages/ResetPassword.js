import {useState} from "react"
import {useParams} from "react-router-dom"
import API from "../services/api"
import {toast} from "react-toastify"

function ResetPassword(){

const {token} = useParams()

const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{

e.preventDefault()

try{

await API.post(`/auth/reset-password/${token}`,{
password
})

toast.success("Password updated")

}catch(err){

toast.error("Reset failed")

}

}

return(

<form onSubmit={handleSubmit}>

<input
type="password"
placeholder="New Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">
Reset Password
</button>

</form>

)

}

export default ResetPassword
