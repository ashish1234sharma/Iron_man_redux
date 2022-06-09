import React from 'react'
import { useSelector } from "react-redux";
import "./ComponentC.css";
export const ComponentC = () => {
    const store =useSelector((event)=>event)
    
  return (
    <>
    <h1>Component C</h1>
    <div className='text'>
    <p>{store.InputTextData}</p>
    </div>
    
    </>
  )
}
