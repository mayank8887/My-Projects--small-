import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { addTodoListFailure, addTodoListsRequest, addTodoListSuccess } from "../Redux/action";

const AddTodo = () =>{
    const dispatch = useDispatch()
    const [todo,setTodo] = useState("");

    const addTodo = (payload)=>{
        dispatch(addTodoListsRequest());

        axios.post("/todos",payload).then((r)=>dispatch(addTodoListSuccess(r.data))).catch((e)=>dispatch(addTodoListFailure(e)))
    }


    const handleAdd = ()=>{
        if(todo){
            const payload = {title:todo,status:false}
            addTodo(payload)
            setTodo("")
        }
    }

    return (

        <div>
            <h3>Add Todo</h3>
            <input type="text" placeholder="Add todo here..." value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddTodo