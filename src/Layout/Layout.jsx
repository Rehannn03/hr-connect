import React from 'react'
import Sidebar from './Sidebar/Sidebar.jsx'
import { Outlet } from 'react-router-dom'
import { UserRoleProvider } from '../context/UserRole.jsx'
function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen '>
        <UserRoleProvider>
          <Sidebar/>
          <Outlet/>
        </UserRoleProvider>
    </div>
  )
}

export default Layout