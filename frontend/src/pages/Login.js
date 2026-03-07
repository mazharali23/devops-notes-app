import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"
import {toast} from "react-toastify"
import {login} from "../services/authService"

function Login(){

const navigate = useNavigate()

const [form,setForm] = useState({
email:"",
password:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{

e.preventDefault()

if(!form.email || !form.password){
toast.error("Email and password required")
return
}

try{

await login(form)

toast.success("Login successful")

navigate("/")

}catch(err){

toast.error(
err?.response?.data?.message || "Invalid credentials"
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
Login
</h2>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
className="w-full p-2 mb-3 border rounded"
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
className="w-full p-2 mb-4 border rounded"
/>

<button
type="submit"
className="w-full bg-blue-600 text-white p-2 rounded"
>
Login
</button>

<p className="text-center mt-4">

Forgot Password?{" "}

<Link
to="/forgot-password"
className="text-blue-600"
>

Reset

</Link>

</p>

<p className="text-center mt-2">

No account?{" "}

<Link
to="/signup"
className="text-blue-600"
>

Signup

</Link>

</p>

</form>

</div>

)

}

export default Login
