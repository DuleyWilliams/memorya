import React from "react"
import { Route } from "react-router-dom"
import { AdminUserProvider } from "./adminUser/AdminUserProvider"
import { AdminUserList } from "./adminUser/AdminUserList"
import { AdminUserContext } from "./adminUser/AdminUserProvider"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the patient user list when http://localhost:3000/AdminUser */}
            <AdminUserProvider>
                <Route path="/">
                    <AdminUserList />
                </Route>
            </AdminUserProvider>
        </>
    )
}
