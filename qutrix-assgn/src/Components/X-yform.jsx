import React, { useEffect, useState } from "react";
import axios from "axios";
import "./X-yform.css";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export const Xyform = ()=>{
    const [formData,setFormData] = useState({
        X_coordinates:"",
        Y_coordinates:"",
    })
    const [Success,setSuccess]= useState(false);
    const [data,setData] = useState([])

    const  handleChange = (e)=>{
          setFormData({
            ...formData,
            [e.target.id]:e.target.value,
          })
    }
   

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);


        fetch("http://localhost:8080/Graphs", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
           setSuccess(true);
          
    };
     
    useEffect(()=>{
        axios.get("http://localhost:8080/Graphs").then((r)=>setData(r.data)).catch((e)=>err.message);
        
    },[Success]);
    return(
        <div>
        {Success?(
            <ScatterChart
            width={400}
            height={400}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="X_coordinates" name="X-coordinates" unit="cm" />
            <YAxis type="number" dataKey="Y_coordinates" name="Y-coordinates" unit="cm" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={data} fill="#8884d8" />
          </ScatterChart>
        ):(<section>
     <form action="" onSubmit={handleSubmit}>
     <div>
       <label htmlFor="number">X-coordinates</label>
         <input type="number" name='number' id='X_coordinates' autoComplete='off'
            // value={formData.X_coordinates}
            required
            onChange={handleChange}
         />
     </div>
     <div>
        <label htmlFor="number">Y-coordinates</label>
         <input type="number" name='number' id='Y_coordinates' autoComplete='off' 
            // value={formData.Y_coordinates}
            required
            onChange={handleChange}
         />
     </div>
     <button type="submit">Submit</button>
   </form>
   </section>)}
         
        </div>
    )
}