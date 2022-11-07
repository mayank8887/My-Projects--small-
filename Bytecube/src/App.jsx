import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Secondfolder } from './components/secondfolder'

function App() {
  const [count, setCount] = useState(0)
  const [amount,setAmount] = useState(0);
  const [balance,setBalance] = useState(0);


  return (
    <div className="App">
      <div>
        <h1>{amount}</h1>
        <h1>{balance}</h1>
        <h1></h1>
        <Secondfolder/>
      </div>
    </div>
  )
}

export default App
