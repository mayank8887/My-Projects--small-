import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Secondfolder } from './components/secondfolder'
import {useDispatch, useSelector} from "react-redux";
import {  addIncomesuccess} from './Redux/actions'
import { addBalancesuccess} from "./Redux/actions";


function App() {
  const amount = useSelector((state)=>state.amount);
  const balance = useSelector((state)=>state.balance);

  const dispatch = useDispatch();

  const AddIncome = ()=>{
    console.log(amount);

      dispatch(addIncomesuccess(+1));
  }
  const AddBalance = ()=>{
    console.log(balance)
      dispatch(addBalancesuccess(+1));
  }

  return (
    <div className="App">
      <div>
        <h1>{amount}</h1>
        <h1>{balance}</h1>
        <h1></h1>
        <Secondfolder AddIncome={AddIncome} AddBalance={AddBalance}/>
      </div>
    </div>
  )
}

export default App
