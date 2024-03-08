import React, { useEffect } from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import img from "../../assets/img.jpeg";
import axios from "axios";

function Login() {
  const [uname, setUname] = useState("");
  const [psw, setPsw] = useState("");
  const [role, setRole] = useState("admin");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(loggedIn && role === "admin"){
      navigate("/dashboard/admin");
    }
    else if(loggedIn && role === "employee"){
      navigate("/dashboard/employee");
    }
    else{
      navigate("/");
    }
  }, [loggedIn]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //api call
    const response = axios.post("http://localhost:3000/api/v1/users/login", {
      username: uname,
      password: psw,
      role: role,
      
    },{
      withCredentials: true,
      credentials: 'include'
    });
    response.then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        localStorage.setItem("authenticated", true);
        localStorage.setItem("name", uname);
        setLoggedIn(true);
        
      }
    });
  }
    return (
      <>
        <div className=" flex h-[100dvh] w-[100%] items-center justify-center ">
          <div className="Login flex h-[80dvh] w-[70%] shadow-2xl rounded-xl overflow-hidden">
            <div
              className="w-1/2 bg-blue-500 h-full  bg-center"
              style={{
                background: `url(${img})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            ></div>

            <form
              className="w-1/2 h-full flex flex-col justify-around box-border px-[3%] py-[2%]"
              onSubmit={handleSubmit}
            >
              <h1 className="text-3xl font-medium">Login Form</h1>
              <input
                className="w-full py-[1%] px-[2%] outline-none border-solid border-b border-b-gray-400 font-medium placeholder:text-gray-500 rounded-lg"
                type="text"
                name="username"
                id="username"
                value={uname}
                placeholder="Username"
                onChange={(e) => {
                  setUname(e.target.value);
                }}
              />
              <input
                className="w-full py-[1%] px-[2%] outline-none border-solid border-b border-b-gray-400 font-medium placeholder:text-gray-500 rounded-lg"
                type="password"
                name="password"
                id="password"
                value={psw}
                placeholder="Password"
                onChange={(e) => {
                  setPsw(e.target.value);
                }}
              />

              <select
                name="role"
                id="role"
                value={role}
                className="mt-1  shadow-md border-none focus:ring-transparent rounded-md bg-gray-100 text-black-500"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </select>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-[3%] w-[50%]">
                  <input type="checkbox" />
                  <span className="text-sm font-medium">Remember Me</span>
                </div>
                <a href="" className="text-sm text-blue-500 font-medium">
                  Forgot Password?
                </a>
              </div>
              <button
                className="bg-black text-white w-full h-[8%] rounded-md hover:bg-slate-900"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  
}
export default Login;
