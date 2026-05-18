import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(){

  const API = "http://192.168.192.129:5000/api";

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function handleLogin(e){

    e.preventDefault();

    try{

      const res = await axios.post(`${API}/auth/login`,{
        email,
        password,
      });

      localStorage.setItem("token",res.data.token);

      navigate("/");

    }catch(err){

      alert("Invalid credentials");

    }

  }

  return (

    <div className="form-container">

      <div className="auth-card">

        <div className="auth-title">
          Welcome Back
        </div>

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="auth-button">
            Login
          </button>

        </form>

        <div className="auth-footer">
          No account? <Link to="/signup">Signup</Link>
        </div>

      </div>

    </div>

  );
}
