
import "./LandingPage.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function LandingPage(){

    return (
      <>
      <div className="header">
      <div className="logoContainer">
    <Avatar className="logo" alt="Git Grove" src="/logo.png" />
    <h3 className="proName">Git Grove</h3>
  </div>
      <div className="authBtn">  <a href="/Pages/Login/LoginPage/signin">
    <button className="btn in sign-btn">Sign In</button>
</a>
<a href="/Pages/Login/LoginPage/signin">
    <button className="btn sign-btn">Sign Up</button>
</a>
</div>
      </div>
          <div className="div1">
          <h1 className="slogan">Code together, ship faster,innovate smarter</h1>
          <h1 className="header1">Be part of the leading AI-driven platform empowering developers worldwide.</h1>
          <a href="/Pages/Login/LoginPage/signin"> <div className="start">
          <Button  sx={{   fontSize: "16px","&:focus": { outline: "none" },  "&:active": { boxShadow: "none" } 
  }} className="getBtn" variant="contained" endIcon={<ArrowForwardIcon />}>Get Started</Button></div></a>
          </div> 
          <img className="AiImg" src="/Ai.png" alt="AI Image"/>
      </>
    );
}


export default LandingPage;