import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function Dashboard() {
  
  const loginUser = localStorage.getItem("authenticated");
  
  const username=localStorage.getItem("name")

  
  if(loginUser==="true"){
    return(
        <div>
            <h1 className="text-center bg-slate-500">
                Welcome {username}
            </h1>
        </div>
    )
  }
  else{
    
    return <Navigate to="/" />;
  }
  
}

export default Dashboard;
