import React, { useContext, useEffect } from "react"
import { AdminUserContext } from "./AdminUserProvider"
import { AdminUser } from "./AdminUser"
import "./AdminUser.css"

export const AdminUserList = () => {
    const { adminUser, getAdminUser } = useContext(AdminUserContext)

    useEffect(() =>  { 
        console.log("AdminUserList: Initial render before data")
        getAdminUser()
    }, [])

    return (
        <div className="adminUsers">
            {
                adminUser.map(() => (
                   <AdminUser />
                ))
            }
        </div>
    )
  
}