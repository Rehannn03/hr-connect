import React from 'react'
import { ADMIN_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS, EMPLOYEE_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { UserRoleContext } from '../../context/UserRole'
function Sidebar() {

    const {userRole}=useContext(UserRoleContext)
    
    const sideBarLinks = userRole==='admin'?ADMIN_SIDEBAR_LINKS:EMPLOYEE_SIDEBAR_LINKS
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <img className='rounded-full items-center' src="https://cdn.vectorstock.com/i/preview-1x/80/38/human-resources-sign-icon-hr-symbol-workforce-vector-8078038.webp" alt="" height={40} width={40}/>
            
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {
                sideBarLinks.map((item)=>{
                    return <SidebarLink key={item.key} item={item}/>
                })
            }
            
        </div>
        <div>
            {
                DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>{
                    return <SidebarLink key={item.key} item={item}/>
                })
            }
        </div>
    </div>
  )
}

function SidebarLink({item}){
    const {pathname}=useLocation()
    return(
        <Link to={item.path} className={`flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base
        ${pathname===item.path?'bg-neutral-700':''}`}>
            <span className='text-xl '> {item.icon}</span>
            {item.label}
        </Link>
    )
}
export default Sidebar