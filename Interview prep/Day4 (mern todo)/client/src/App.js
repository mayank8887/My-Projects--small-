import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { useEffect } from 'react';
import axios from "axios";
import Item from './components/item';

function App() {
  const [text,setText] = useState("");
  const [todo,setTodo] = useState([]);
  const [isUpdating,setUpdating] =useState("");

  useEffect(()=>{
      axios.get("http://localhost:5000/get-todos").then((res)=>setTodo(res.data)).catch((err)=>console.log(err));
  })

  const addUpdate = ()=>{
    if(isUpdating===""){
      axios.post("http://localhost:5000/save-todo",{text})
      .then((res)=>{console.log(res.data) 
      setText("");
    })
      .catch((err)=>console.log(err));
    }
    else{
      axios.post("http://localhost:5000/update-todo",{_id:isUpdating,text})
      .then((res)=>{console.log(res.data) 
      setText("");
      setUpdating("");
    })
      .catch((err)=>console.log(err));
    }
  }

  const deleteTodo=(_id)=>{

    axios.post("http://localhost:5000/delete",{_id})
    .then((res)=>{console.log(res.data) 

  })
    .catch((err)=>console.log(err));
  }
  const updateTodo = (_id,text)=>{
      setUpdating(_id);
      setText(text);
  }

  return (
    <div className="App">
     <div className="container">
      <h1>Todo App</h1>
      <div className="top">
        <input type="text" placeholder = "Write something...." value={text} onChange={(e)=>setText(e.target.value)}/>
        <div className='add' onClick={addUpdate}>{isUpdating?"Update":"Add"}</div>
      </div>

      <div className='list'>
        {todo.map(item=><Item key={item._id} text={item.text} remove={()=>deleteTodo(item._id)} update={()=>updateTodo(item._id,item.text)}/>)}
      </div>
     </div>
    </div>
  );
}

export default App;
