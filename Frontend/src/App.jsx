import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './Pages/Login/LoginPage.jsx';
import LandingPage from './Pages/Login/LandingPage/LandingPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
 
}

export default App
