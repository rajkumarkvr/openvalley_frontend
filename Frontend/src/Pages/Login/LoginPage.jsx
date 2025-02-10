import { useState } from "react";
import "./LoginPage.css"
import InputBox from "../../Components/InputBox/InputBox";
import { Button } from "@mui/material";
import ButtonComp from "../../Components/Button/ButtonComp";

function LoginPage({isSignedIn}){

    const [signed,func] = useState(isSignedIn);

    const toggleSigned = () =>{
        func(!signed);
        console.log(signed);
    }

    return(
        <>
        <div className="page">
            <div className="loginImg"></div>
            <div className="loginPageRightSide">
                {signed? signInBox() : signUpBox()}   
                <p>{signed ? "Don't have an account? " : "Already have an account? "} <span className="loginSwitch" onClick={toggleSigned}>{signed ? "Sign Up" : "Sign In"}</span></p>
            </div>
        </div>
        </>
    )

}

function signUpBox(){

    return(
        <div className="loginBox">
            <h1>Register</h1>
            <InputBox type="text" placeholder="Username" />
            <InputBox type="Email" placeholder="Email" />
            <InputBox type="password" placeholder="Password" />
            <ButtonComp value={"Sign Up"} />
        </div>
    )   
}

function signInBox(){

    return(
        <div className="loginBox" style={{height:"33%"}}>
        <h1>Login</h1>
        <InputBox type="text" placeholder="Username or Email"/>       
        <InputBox type="password" placeholder="Password" />
        <ButtonComp value={"Sign In"} />
    </div>
    )   
}

export default LoginPage; 