import { useState } from 'react'
//masaimocker deployed link -- https://masai-api-mocker.herokuapp.com/  
import logo from './logo.svg'
import './App.css'
import { Container } from '@chakra-ui/react'
import MainRoutes from './Pages/MainRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Container minWidth={"6xl"}>
      <MainRoutes/>
     </Container>
       
    </div>
  )
}

export default App
