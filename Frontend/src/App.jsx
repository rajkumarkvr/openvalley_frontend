import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/index.css';
import Button from './Button';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1>Hello world</h1>
  <Button />
  </>
  )
}

export default App
