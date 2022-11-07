import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Onboarding from './Components/Onboarding'
import { Navbar } from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Onboarding/>
    </div>
  )
}

export default App
