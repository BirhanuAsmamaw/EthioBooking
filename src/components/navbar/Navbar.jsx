import "./navbar.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()
   
    const handleLogin = () => {
        navigate("/login");

    };
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Ethiobooking</span>
                <div className="navItems">

                    <button className="navButton">Register</button>
                    <button className="navButton" onClick={handleLogin}>Login</button>
                    
                </div>
            </div>
       </div> 
   )
}
export default Navbar