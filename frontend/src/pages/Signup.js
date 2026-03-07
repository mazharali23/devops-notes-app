import { useState } from "react"
import { signup } from "../services/auth"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { toast } from "react-toastify"

function Signup(){

const navigate = useNavigate()

const [form,setForm] = useState({
name:"",
email:"",
password:""
})

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{

e.preventDefault()

try{

const await signup(form)

toast.success("Account created successfully")

navigate("/login")

}catch(err){

toast.error(
err?.response?.data?.message || "Signup failed"
)

}

}

return(

<div className="auth-wrapper">

<form className="auth-box" onSubmit={handleSubmit}>

<h2>Create Account</h2>

<input
name="name"
placeholder="Name"
onChange={handleChange}
/>

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

<button>Signup</button>

<p>
Already have account?
<Link to="/login"> Login</Link>
</p>

</form>

</div>

)

}

export default Signup
