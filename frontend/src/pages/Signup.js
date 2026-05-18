import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup(){

  const API = "http://192.168.192.129:5000/api";

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function handleSignup(e){

    e.preventDefault();

    try{

      await axios.post(`${API}/auth/signup`,{
        name,
        email,
        password,
      });

      navigate("/login");

    }catch(err){

      alert("Signup failed");

    }

  }

  return (

    <div className="form-container">

      <div className="auth-card">

        <div className="auth-title">
          Create Account
        </div>

        <form
          className="auth-form"
          onSubmit={handleSignup}
        >

          <input
            className="auth-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

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
            Signup
          </button>

        </form>

        <div className="auth-footer">
          Already have account? <Link to="/login">Login</Link>
        </div>

      </div>

    </div>

  );
}
