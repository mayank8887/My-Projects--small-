import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, dividerClasses, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./index.css"


/**
 * The below components shows the working example of axios for API calls.
 * Also Material UI is integrated for design.
 */

function Posts(){

      const [post,setPost]= useState([]);
      const [search , setSearchbar] = useState("");

      const [formData,setFormData]= useState({
        title:"",
        description:"",
        poster:"",
      })

      useEffect(()=>{
        axios.get("http://localhost:8000/post").then((res)=>setPost(res.data)).catch((err)=>console.log(err));
      },[])
      
      // axios.post("http://localhost:8000/post/del",{_id}).then((res)=>console.log(res.data)).catch((err)=>console.log("err"))

      const handleChange1 = (e)=>{
        setSearchbar({ [e.target.id]:e.target.value})
      }

      console.log(search)
      console.log(post)

      for(let i=0;i<post.length;i++){
        if(search == post[i].title){
            console.log("founded")
        }
        else{
            console.log("Not founded")
        }
      }
      
      
      const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
        })
      }
      console.log(post)
      

      return(
        <>
        <div className='poster'>
        {post?.map((item)=>{
            
            return(
                <div key={item.id}>
                    <div className='img'>
                        
                        <img src={item.poster} alt={item.poster} />
                    </div>
                    <h1>{item.title}</h1>
                    <h3>{item.description}</h3>
                </div>
            )
        })}</div>


        <form action='http://localhost:8000/post/add' method='post' encType='multipart/form-data'>
            <input onChange={handleChange} type="text" name="title" placeholder='Enter title' id='title'/>
            <input onChange={handleChange} type="text" name="description" placeholder='Enter description' id="description"/>
            <input onChange={handleChange} type="file" name="poster" id="poster"/>
            <input type="submit" value="Submit"/>
        </form>
        <input onChange={handleChange1} type="text" placeholder='Search poster'/>;
        </>
      )

}
export default Posts;