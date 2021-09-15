import React, { useState } from "react"

export const AdminUserContext = React.createContext()

export const AdminUserProvider = (props) => {
    /* let adminUser = [] */
    const [adminUser, setAdminUser] = useState([])

    const getAdminUser = () => {
        return fetch ("http://localhost:8088/adminUser")
            .then (res => res.json())
            .then (setAdminUser)
    }

    return (
        <AdminUserContext.Provider value ={{
            adminUser, getAdminUser
        }}>
            {props.children}
        </AdminUserContext.Provider>
    )
}