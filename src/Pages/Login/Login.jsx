import React from 'react'
import { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [uname, setUname] = useState("")
    const [psw, setPsw] = useState("")
    const [role, setRole] = useState("admin")
    const navigate = useNavigate()
    
    const submit=(e)=>{
      e.preventDefault();
      //api call
      axios.post("http://localhost:3000/api/v1/users/login",{
        username:uname,
        password:psw,
        role:role
      }).then((res)=>{
        console.log(res.data)
        const response =res
    })}
  return (
    
   <div className='w-screen h-screen bg-slate-800 py-4'>

    <div className="container  w-80 mx-auto my-20 px-6 py-6 shadow bg-slate-600  ">
        <h1 className="text-black-600 font-bold font-sans text-4xl text-center">
          Login
        </h1>
        <div className="h-0.5 bg-gray-200 w-36 mx-auto mt-2.5"></div>
        <form action="" method="POST" onSubmit={submit}>
          <div className="flex flex-col my-5">
            <label className="my-2 text-xl font-medium" for="uname">
              Username
            </label>
            <input
              type="text"
              id="uname"
              name="uname"
              value={uname}
              className="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-md bg-gray-100 text-black-500"
              onChange={(e) => setUname(e.target.value)}
            />
            <label className="my-2 text-xl font-medium" for="psw">
              Password
            </label>
            <input
              type="password"
              id="psw"
              name="psw"
              value={psw}
              className="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-md bg-gray-100 text-black-500"
              onChange={(e) => setPsw(e.target.value)}
            />
            <label className="my-2 text-xl font-medium" for="psw">
              Role:
            </label>
            <select
              name="role"
              id="role"
              value={role}
              className="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-md bg-gray-100 text-black-500"
              onChange={(e) => setRole(e.target.value)}
              >
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div className="text-center mt-3">
            <a href="#" className="text-black-600 font-medium px-2 hover:text-slate-500 " >
              Forgot Password?
              </a>
            <button className="px-7 py-2 mx-2 font-semibold text-white bg-black hover:bg-slate-700 rounded ">
              Submit
            </button>
          </div>
        </form>
        
      </div>
   </div>
      
  )
}

export default Login