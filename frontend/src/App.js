import { BrowserRouter,Routes,Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import "./App.css"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

</Routes>

<ToastContainer position="top-right"/>

</BrowserRouter>

)

}

export default App
