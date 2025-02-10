import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
function LandingPage(){
    const navigate = useNavigate();

    return (
      <>
      <div className="header"><img src="" className="logo"/>
        <button className="btn in sign-btn" onClick={() => navigate("/login")}>Sign In</button>
      <button className="btn sign-btn" onClick={() => navigate("/login")}>Sign Up</button></div>
          <div className="div1">
          <h1 className="slogan">Code together, ship faster,innovate smarter</h1>
          <h1 className="header1">Be part of the leading AI-driven platform empowering developers worldwide.</h1>
          </div> 
      </>
    );
}

export default LandingPage;