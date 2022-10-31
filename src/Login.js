import React, {useState} from "react";
import mobile from "./mobile.png";
import './Login.css';
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Login = {
        email: "",
        password: ""
    }
    const navigate=useNavigate()
    const postuser = () => {
        Login.email = email
        Login.password = password
        console.log(Login).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error)
        })
    } 
    return(
        <div className="bg">
        <div className="sub-bg">
    
            <form className="forms">
                <h1>MY PESA</h1>
    
                <div className="sign-header">
                    <div class="topnav">
                        <a class="active" href="#home">Home</a>
                        <a href="#about">About</a>
    
                        <a href="#contact">Contact</a>
                    </div>
                    <h3>Enables you to save , Send  and
                        <br></br>
                        receive Money instantly.</h3>
                </div>
    
                <button className="buttonn" type="button"
                    onClick={postuser}>Login</button>
                <p>Dont have an account?
                    <a href="/signup">Signup up here</a>
                </p>
                <div className="mobile">
                    <img src={mobile}
                        alt='./mobile.png'/>
    
                </div>
            </form>
        </div>
    </div>
    )
   

}
export default Login;
