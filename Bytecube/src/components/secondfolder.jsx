import React from "react";


export const Secondfolder = ({AddIncome,AddBalance})=>{

   
    return(
       <>
        <button onClick={AddIncome} >Add income</button>
        <button onClick={AddBalance}>Add Blance</button>
       
        </>
    )
}