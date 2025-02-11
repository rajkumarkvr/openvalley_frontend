// import 'bootstrap/dist/css/bootstrap.css'
import LoginPage from './Pages/Login/LoginPage.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import "./App.css"
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <HomePage />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/createRepository" element={<LoginPage />} />
        <Route exact path="/profile" element={<LoginPage />} />
        <Route exact path="/createRepository" element={<LoginPage />} />
        <Route exact path="/settings" element={<LoginPage />} />
      </Routes>
    </>
  )
  list = [
  {
    name:"Frontend",
    latestCommitMessage:"something",
    timestamp:"2mins",
  },
  {
    name:"Frontend",
    latestCommitMessage:"something",
    timestamp:"2mins",
  },
    {
    name:"Frontend",
    latestCommitMessage:"something",
    timestamp:"2mins",
  },
 ]
}

export default App
