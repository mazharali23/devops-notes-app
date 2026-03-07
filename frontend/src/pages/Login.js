import { useState } from "react"
import { login } from "../services/auth"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { toast } from "react-toastify"

function Login(){

const navigate = useNavigate()

const [form,setForm] = useState({
email:"",
password:""
})

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{

e.preventDefault()

try{

const await login(form)

toast.success("Login successful")

navigate("/")

}catch(err){

toast.error(
err?.response?.data?.message || "Invalid credentials"
)

}

}

return(

<div className="auth-wrapper">

<form className="auth-box" onSubmit={handleSubmit}>

<h2>Login</h2>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<button>Login</button>

<p>
No account?
<Link to="/signup"> Signup</Link>
</p>

</form>

</div>

)

}

export default Login
