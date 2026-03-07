import { useNavigate } from "react-router-dom"
import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa"
import { useState, useEffect } from "react"

function Header(){

const navigate = useNavigate()
const [open,setOpen] = useState(false)
const [dark,setDark] = useState(false)

useEffect(()=>{

const theme = localStorage.getItem("theme")

if(theme==="dark"){
document.documentElement.classList.add("dark")
setDark(true)
}

},[])

const toggleDark = ()=>{

const html = document.documentElement

if(html.classList.contains("dark")){
html.classList.remove("dark")
localStorage.setItem("theme","light")
setDark(false)
}else{
html.classList.add("dark")
localStorage.setItem("theme","dark")
setDark(true)
}

}

const logout = ()=>{
localStorage.removeItem("token")
navigate("/login")
}

return(

<div className="bg-white dark:bg-gray-800 shadow px-8 py-4 flex justify-between items-center">

<h1 className="text-xl font-semibold">
DevOps Notes
</h1>

<div className="flex items-center gap-6">

<button
onClick={toggleDark}
className="p-2 rounded bg-gray-200 dark:bg-gray-700"
>
{dark ? <FaSun/> : <FaMoon/>}
</button>

<div className="relative">

<FaUserCircle
size={26}
className="cursor-pointer"
onClick={()=>setOpen(!open)}
/>

{open && (

<div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 shadow rounded w-32">

<button
onClick={logout}
className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
>
Logout
</button>

</div>

)}

</div>

</div>

</div>

)

}

export default Header
