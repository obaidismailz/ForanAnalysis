import "../Style/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="logo">Foran Analysis</h1>
      <div className="RegisterBtn">
        <Link to="/Register" state={{ name: "Login" }} end>
          Login
        </Link>

        <Link to="/Register" state={{ name: "SignUp" }} end>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
