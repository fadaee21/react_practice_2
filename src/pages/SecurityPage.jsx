import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const SecurityPage = () => {
    return (
        <>
            <div>SecurityPage</div>
            <section>
                <h3> go to welcome page</h3>
                <Link to={'welcomePage'} >welcome Page</Link>
                <Outlet />
                <h3> go to goodbye page</h3>
                <Link to={'goodbyePage'} >goodbye Page</Link>
                <Outlet />
            </section>
        </>
    )
}

export default SecurityPage