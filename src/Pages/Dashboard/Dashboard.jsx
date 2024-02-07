import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const loginUser = localStorage.getItem("authenticated");
  
  if(loginUser){
    return(
        <div>
            <h1>
                Welcome to Dashboard
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
