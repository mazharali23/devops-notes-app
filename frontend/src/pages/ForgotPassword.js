import {useState} from "react"
import {toast} from "react-toastify"
import API from "../services/api"

function ForgotPassword(){

const [email,setEmail] = useState("")

const handleSubmit = async(e)=>{

e.preventDefault()

try{

await API.post("/auth/forgot-password",{email})

toast.success("Reset link sent to email")

}catch(err){

toast.error(
err?.response?.data?.message || "Email not found"
)

}

}

return(

<div className="flex items-center justify-center min-h-screen bg-gray-100">

<form
onSubmit={handleSubmit}
className="bg-white p-8 rounded shadow-md w-96"
>

<h2 className="text-2xl font-bold mb-6 text-center">
Forgot Password
</h2>

<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-2 mb-4 border rounded"
/>

<button
type="submit"
className="w-full bg-blue-600 text-white p-2 rounded"
>
Send Reset Link
</button>

</form>

</div>

)

}

export default ForgotPassword
