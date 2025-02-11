import { useState } from "react";
import "./LoginPage.css"
import {Button,TextField} from "@mui/material";

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
            <TextField label="Username" id="outlined-basic" variant="outlined" />
            <TextField label="Email" id="outlined-basic" variant="outlined" />  
            <TextField label="Password" id="outlined-basic" variant="outlined" />
            <Button variant="contained">Sign Up</Button>
        </div>
    )   
}

function signInBox(){

    return(
        <div className="loginBox" style={{height:"32%"}}>
        <h1>Login</h1>
        <TextField label="Username or Email" id="outlined-basic" variant="outlined" />  
        <TextField label="Password" id="outlined-basic" variant="outlined" />
        <Button variant="contained">Sign In</Button >
    </div>
    )   
}

export default LoginPage; 