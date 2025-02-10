import { useState } from "react";
import "./LoginPage.css"
function LoginPage(){

    

    return(
        <>
        <div className="page">
            <img className="loginImg" src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" alt="" />
            {LoginBox()}
        </div>

        </>
    )
}

function LoginBox(){
    const [signed,func] = useState(false);

    const toggleSigned = () =>{
        func(!signed);
        console.log(signed);
    }

    return(
        <div className="loginBox">
            <h1> {signed ? "Sign In" : "Sign Up"}</h1>
            <input type="text" placeholder= {signed ? "Username or Email" : "Username"} />
            {!signed ? <input type="text" placeholder="Email" /> : null }
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p>Don't have an account? <span onClick={toggleSigned}>Sign Up</span></p>
        </div>
    )   
}

export default LoginPage; 