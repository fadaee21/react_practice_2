import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthStatus from './AuthState'


const SecurityPage = () => {

    return (
        <section>
            <h1>security Page</h1>
            <AuthStatus />
            <h5><Link to={'publicPage'} >Public Page</Link></h5>
            <h5><Link to={'protectedPage'} >Protected Page</Link></h5>
            <hr />
            <Outlet />
        </section>
    )
}

export default SecurityPage