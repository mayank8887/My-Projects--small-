import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";

const MainRoutes = ()=>{
    return (
        <Routes>
           <Route path="/" element={<Homepage/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="signup" element={<Signup/>}/>
           <Route/>
        </Routes>
    )
}

export default MainRoutes;