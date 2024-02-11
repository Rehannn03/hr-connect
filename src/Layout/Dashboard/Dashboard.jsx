import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const loginUser = localStorage.getItem("authenticated");
  const username=localStorage.getItem("name")
  if(loginUser){
    return(
        <div>
            <h1 className="text-center bg-slate-500">
                Welcome {username}
            </h1>
        </div>
    )
  }
  else{
    setLoggedIn(false)
    return <Navigate to="/login" />;
  }
  
}

export default Dashboard;
