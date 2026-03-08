import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"
import {toast} from "react-toastify"
import {signup} from "../services/authService"

function Signup(){

const navigate = useNavigate()

const [form,setForm] = useState({
name:"",
email:"",
password:"",
confirmPassword:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{

e.preventDefault()

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!form.name){
  toast.error("Name is required")
  return
}

if(!emailRegex.test(form.email)){
  toast.error("Enter a valid email")
  return
}

if(form.password.length < 8){
  toast.error("Password must be at least 8 characters")
  return
}

if(!/[A-Za-z]/.test(form.password) || !/[0-9]/.test(form.password)){
  toast.error("Password must contain at least one letter and one number")
  return
}

if(form.password !== form.confirmPassword){
  toast.error("Passwords do not match")
  return
}

try{

await signup({
name:form.name,
email:form.email,
password:form.password
})

toast.success("Account created successfully")

navigate("/login")

}catch(err){

toast.error(
err?.response?.data?.message || "Signup failed"
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
Create Account
</h2>

<input
type="text"
name="name"
placeholder="Name"
onChange={handleChange}
className="w-full p-2 mb-3 border rounded"
/>

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
className="w-full p-2 mb-3 border rounded"
/>

<input
type="password"
name="confirmPassword"
placeholder="Confirm Password"
onChange={handleChange}
className="w-full p-2 mb-4 border rounded"
/>

<button
type="submit"
className="w-full bg-blue-600 text-white p-2 rounded"
>
Signup
</button>

<p className="text-center mt-4">

Already have an account?{" "}

<Link
to="/login"
className="text-blue-600"
>

Login

</Link>

</p>

</form>

</div>

)

}

export default Signup
