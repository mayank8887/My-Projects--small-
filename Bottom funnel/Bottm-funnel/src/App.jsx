import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  let map=[];

   for(let i=100;i<=100000;i++){
    let palindrome=[];
    let convert=i.toString();
    let splitt= convert.split("").map(Number);
    
    for(let a=splitt.length-1;a>=0;a--){
      palindrome.push(splitt[a])
    }
    let pal= palindrome.join("")
    let pal1=parseInt(`${pal}`);

    if(i===pal1){
      map.push(i)
    }

  }

  return (
    <div className="App">
      <div>
        {map?.map((item)=>{
          return(
            <div>
              <div>{item}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
