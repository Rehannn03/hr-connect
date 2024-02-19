import React from 'react'
import Sidebar from './Sidebar/Sidebar.jsx'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen '>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Layout