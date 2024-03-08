import React,{createContext,useState} from 'react'

const UserRoleContext=createContext()

function UserRoleProvider({children}){
    const [userRole,setUserRole]=useState('admin')

    return(
        <UserRoleContext.Provider value={{userRole,setUserRole}}>
            {children}
        </UserRoleContext.Provider>
    )
}

export {UserRoleProvider,UserRoleContext}