import "./login.css";
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";

// import {faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Container } from './styles';

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1> Sign In </h1>
        <div className="input-box">
            <input type="text"  placeholder="Username" />
        </div>
        <div className="input-box" 
        >
            <input type="password" placeholder="Password"/>
        </div>
        <div className="remember-forgot">
            <label htmlFor=""><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Sign in</button>
        <div className="create-account-link">
            <p>Don't have an account yet? <a href="#">Create Account</a></p>
        </div>
      </form>
    
   {/* <Navbar/> */}
{/*  
   <Footer /> */}
    </div>
     
  )
  
}

export default Login;

{/* Log in

EMAIL IS REQUIRED

PASSWORD

Remember me

Forgot password?

Open account */}
