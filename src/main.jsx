import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Routes, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Dashboard from './Layout/Dashboard/Dashboard.jsx'
import Layout from './Layout/Layout.jsx'
import ApplyLeave from './Pages/Employee/Apply Leave/ApplyLeave.jsx'
import LeaveApprovalPage from './Pages/Leave Approval/LeaveApproval.jsx'
import AddUser from './Pages/Add User/AddUser.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <>
    <Route path="/" element={<App/>}>
    <Route index element={<Login/>}/>
    <Route path='logout' element={<Login/>}/>
      

    </Route>
    <Route path='/dashboard/admin' element={<Layout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path='leaveapproval' element={<LeaveApprovalPage/>}/>
    <Route path='addUser' element={<AddUser/>}/>
    </Route>
    <Route path='/dashboard/employee' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='applyleave' element={<ApplyLeave/>}/>
      
      </Route>
    </>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
