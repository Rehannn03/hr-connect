import React, { useEffect } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
function Logout() {
    useEffect(()=>{
        axios.post('http://localhost:3000/logout')
        .then((res)=>{
            console.log(res)
            localStorage.setItem("authenticated",false)
        })
    },[])
    const logout=localStorage.getItem("authenticated")
  if(logout==="false"){
    return(
        <Navigate to='/'/>
    )
  }
}

export default Logout