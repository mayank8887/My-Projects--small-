import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Xyform } from './Components/X-yform'
import Nav from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
      <Xyform/>
    </div>
  )
}

export default App
