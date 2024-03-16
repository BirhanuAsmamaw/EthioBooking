
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import {faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Container } from './styles';

const Login = () => {

  return (
    <div className="wrapper">
      <form action="">
        <h1>Sign In</h1>
        <div className="input-box">
            <input type="text"  placeholder="Username" />
            {/* <FontAwesomeIcon icon={faUser} /> */}
        </div>
        <div>
            <input type="password" placeholder="Password"/>
        </div>

        <div>
            <label htmlFor=""><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Sign in</button>

        <div>
            <p>Don't have an account</p>
        </div>

      </form>
    


   {/* <Navbar/> */}
 
   <Footer />

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