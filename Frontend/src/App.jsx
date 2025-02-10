import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap.css'
import LoginPage from './Pages/Login/LoginPage.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import "./App.css"

function App() {
  return (
    <>
      {/* <LoginPage isSignedIn={false} /> */}
      <HomePage />
    </>
  )
}

export default App
