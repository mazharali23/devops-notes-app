import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  function logout(){

    localStorage.removeItem("token");

    navigate("/login");

  }

  return (

    <div className="sidebar">

      <div className="logo">
        DevOps Notes
      </div>

      <div className="nav-links">

        <Link to="/">Dashboard</Link>
        <Link to="/">My Notes</Link>
        <Link to="/">Tags</Link>

      </div>

      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

    </div>

  );
}
