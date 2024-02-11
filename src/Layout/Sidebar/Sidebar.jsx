import React from 'react'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants/navigation'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import { Link } from 'react-router-dom'
const linkClass ='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
function Sidebar() {
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <img src="https://cdn.vectorstock.com/i/preview-1x/80/38/human-resources-sign-icon-hr-symbol-workforce-vector-8078038.webp" alt="" height={40} width={40}/>
            <span className='text-neutral-100 text-lg'>HR Connect</span>
        </div>
        <div className='flex-1'>
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>{
                <SidebarLink key={item.key} item={item}/>
            })}
        </div>
        <div>
            Bottom Part
        </div>
    </div>
  )
}

function SidebarLink({item}){
    return(
        <Link to={item.path} className={linkClass}>
            <span className='text-xl '> {item.icon}</span>
            {item.label}
        </Link>
    )
}
export default Sidebar