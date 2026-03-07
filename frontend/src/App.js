import { BrowserRouter,Routes,Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import "./App.css"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/reset-password/:token" element={<ResetPassword/>}/>
<Route path="/forgot-password" element={<ForgotPassword/>}/>
<Route path="/" element={<Dashboard/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

</Routes>

<ToastContainer position="top-right"/>

</BrowserRouter>

)

}

export default App
