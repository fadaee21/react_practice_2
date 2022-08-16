import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to={"/"} >Home</Link>
            <Link to={"firstPage"} >First Page</Link>
            <Link to={"secondPage"} >Second Page</Link>
            <Link to={"users"} >User Page</Link>
            <Link to={"securityPage"} >Security Page</Link>

        </div>
    )
}

export default Header